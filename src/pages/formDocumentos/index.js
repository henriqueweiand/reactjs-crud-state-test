import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import { Creators as DepartamentosActions } from '~/store/ducks/departamentos';
import { Creators as CategoriasActions } from '~/store/ducks/categorias';

// import { DocumentosTable, DocumentosItem } from './styles';
moment.locale('pt-BR');

class formDocumentos extends Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({}),
    getCategoriasRequest: PropTypes.func.isRequired,
    getDepartamentosRequest: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    departamentos: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }),
    categorias: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }),
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
    departamentos: [],
    categorias: [],
    errors: {},
    isSubmitting: false,
  };

  componentDidMount() {
    const { getCategoriasRequest, getDepartamentosRequest } = this.props;

    getCategoriasRequest();
    getDepartamentosRequest();
  }

  renderDepartamentos = () => {
    const {
      setFieldValue, departamentos, values,
    } = this.props;

    return (
      <Fragment>
        <select
          name="departamento"
          onChange={async (e) => {
            const index = values.departamento.findIndex(
              element => (
                element.id === e.target.value ? element : false
              ),
            );

            if (index < 0) {
              await setFieldValue(e.target.name, [
                ...values.departamento,
                {
                  id: e.target.value,
                  name: e.target.selectedOptions[0].label,
                },
              ]);
            }
          }}
        >
          <option key={0} value="">Selecione</option>
          {
            departamentos.data.map(departamento => (
              <option key={departamento.id} value={departamento.id}>{departamento.name}</option>
            ))
          }
        </select>
        {
          values.departamento.map(departamento => (
            <div key={departamento.id}>
              {departamento.name}
              <button
                type="button"
                onClick={() => {
                  const index = values.departamento.indexOf(departamento);

                  values.departamento.splice(index, 1);
                  setFieldValue('departamento', values.departamento);
                }}
              >
                  Remover
              </button>
            </div>
          ))
        }
      </Fragment>
    );
  }

  renderCategorias = () => {
    const {
      setFieldValue, categorias, values,
    } = this.props;

    return (
      <select
        name="categoria"
        defaultValue={values.categoria[0] ? values.categoria[0].id : ''}
        onChange={async (e) => {
          await setFieldValue(e.target.name, [
            {
              id: e.target.value,
              name: e.target.selectedOptions[0].label,
            },
          ]);
        }}
      >
        <option value="">Selecione</option>
        {
          categorias.data.map(categoria => (
            <option
              key={categoria.id}
              value={categoria.id}
            >
              {categoria.name}
            </option>
          ))
        }
      </select>
    );
  }

  render() {
    const {
      isSubmitting, handleSubmit, handleChange, values, errors, departamentos, categorias,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>formDocumentos</div>
        <div>
          codigo
          <input
            placeholder="codigo"
            name="codigo"
            type="text"
            value={values.codigo}
            onChange={handleChange}
          />
        </div>

        <div>
          titulo
          <input
            placeholder="titulo"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
          />
        </div>

        <div>
          departamentos
          {
            departamentos.loading ? (
              <p>Loading</p>
            ) : (
              this.renderDepartamentos()
            )
          }
        </div>

        <div>
          categoria
          {
            categorias.loading ? (
              <p>Loading</p>
            ) : (
              this.renderCategorias()
            )
          }
        </div>

        <div>
          { errors && JSON.stringify(errors) }
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          Enviar
        </button>
      </form>
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

      if (params.codigo) {
        props.putDocumentosRequest(values, params.codigo);
      } else {
        props.postDocumentosRequest(values);
      }
      setSubmitting(false);
    },
  }),
)(formDocumentos);
