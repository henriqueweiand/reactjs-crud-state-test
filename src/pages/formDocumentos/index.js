import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
  componentDidMount() {
    this.props.getCategoriasRequest();
    this.props.getDepartamentosRequest();
  }

  renderDepartamentos = () => {
    const {
      setFieldValue, departamentos, values,
    } = this.props;

    return (
      <select
        name="departamento"
        onChange={async (e) => {
          await setFieldValue(e.target.name, [
            ...values.departamento,
            {
              id: e.target.value,
              name: e.target.selectedOptions[0].label,
            },
          ]);
        }}
      >
        <option key={0} value="">Selecione</option>
        {
          departamentos.data.map(departamento => (
            <option key={departamento.id} value={departamento.id}>{departamento.name}</option>
          ))
        }
      </select>
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
      isSubmitting, handleSubmit, handleChange, values, departamentos, categorias, errors,
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
        const documento = data.filter(documento => documento.codigo === params.codigo)[0];

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
      departamento: Yup.array().min(1).required('Selecione no mínimo um departamento'),
      categoria: Yup.array().min(1).max(1).required('Selecione uma categoria'),
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
