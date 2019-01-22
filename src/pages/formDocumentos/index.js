import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputMask from 'react-input-mask';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import { Creators as DepartamentosActions } from '~/store/ducks/departamentos';
import { Creators as CategoriasActions } from '~/store/ducks/categorias';

import { FaAngleLeft } from 'react-icons/fa';
import { Button, Bar, Title } from '~/styles/components';
import Field from '~/components/Field';

import { Container, Form } from './styles';
import Departamentos from './components/Departamentos';
import Categorias from './components/Categorias';

moment.updateLocale('pt-BR');
// moment.locale('pt-BR');

class FormDocumentos extends Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
    history: PropTypes.shape({}),
    submitForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({}),
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }).isRequired,
    getCategoriasRequest: PropTypes.func.isRequired,
    getDepartamentosRequest: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    departamentos: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }).isRequired,
    categorias: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }).isRequired,
    values: PropTypes.shape({
      codigo: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      departamento: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
      categoria: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    }).isRequired,
  };

  static defaultProps = {
    errors: {},
    isSubmitting: false,
    history: {},
  };

  componentDidMount() {
    const { getCategoriasRequest, getDepartamentosRequest } = this.props;

    getCategoriasRequest();
    getDepartamentosRequest();
  }

  render() {
    const {
      isSubmitting, handleSubmit, handleChange, submitForm, setFieldValue,
      values, errors, departamentos, categorias, history, match: { params },
    } = this.props;
    return (
      <Container>
        <Bar>
          <FaAngleLeft
            onClick={() => history.goBack()}
          />
          <Title>
            {
              _.isEmpty(params)
                ? 'Cadastro de documento '
                : `Alteração de documento - ${values.title}`
            }
          </Title>
          <button
            type="button"
            onClick={() => {
              console.log('toma essa');
              submitForm();
            }}
            disabled={isSubmitting}
            color="white"
            size="default"
          >
            {
              _.isEmpty(params)
                ? 'Salvar'
                : 'Atualizar'
            }
          </button>
        </Bar>

        <Form onSubmit={handleSubmit}>
          <Field
            title="Código"
            error={errors.codigo}
          >
            <InputMask
              mask="********************************"
              maskChar=""
              placeholder="Código"
              name="codigo"
              type="text"
              value={values.codigo}
              onChange={handleChange}
            />
          </Field>

          <Field
            title="Título"
            error={errors.title}
          >
            <input
              placeholder="Título"
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
            />
          </Field>

          <Field
            title="Categoria"
            loading={categorias.loading}
            error={errors.categoria}
          >
            <Categorias
              setFieldValue={setFieldValue}
              categorias={categorias}
              values={values}
            />
          </Field>

          <Field
            title="Departamentos"
            loading={departamentos.loading}
            error={errors.departamento}
          >
            <Departamentos
              setFieldValue={setFieldValue}
              departamentos={departamentos}
              values={values}
            />
          </Field>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  documentos: state.documentos,
  departamentos: state.departamentos,
  categorias: state.categorias,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...DocumentosActions,
  ...DepartamentosActions,
  ...CategoriasActions,
}, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFormik({
    mapPropsToValues: ({ documentos: { data }, match: { params } }) => {
      if (params.codigo) {
        const documento = data.filter(item => item.codigo === params.codigo)[0];

        return {
          ...documento,
        };
      }

      return {
        codigo: '',
        title: '',
        date: moment().format('YYYY-MM-DD'),
        departamento: [],
        categoria: [],
      };
    },

    validationSchema: Yup.object().shape({
      codigo: Yup.string().required('Preencha o campo código'),
      date: Yup.date().required('Preencha o campo data'),
      title: Yup.string().required('Preencha o campo title'),
      departamento: Yup.array().required('Selecione no mínimo um departamento').min(1),
      categoria: Yup.array().required('Selecione uma categoria').min(1).max(1),
    }),

    validateOnChange: false,

    handleSubmit: (values, { props, setSubmitting }) => {
      const { match: { params } } = props;

      if (_.isEmpty(params)) {
        props.postDocumentosRequest(values);
      } else {
        props.putDocumentosRequest(values, params.codigo);
      }
      setSubmitting(false);
    },
  }),
)(FormDocumentos);
