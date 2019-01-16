import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import { Creators as DepartamentosActions } from '~/store/ducks/departamentos';
import { Creators as CategoriasActions } from '~/store/ducks/categorias';

// import { DocumentosTable, DocumentosItem } from './styles';

class formDocumentos extends Component {
  componentDidMount() {
    this.props.getCategoriasRequest();
    this.props.getDepartamentosRequest();
  }

  renderDepartamentos = () => {
    const {
      handleChange, setFieldValue, departamentos, values,
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
          // handleChange(e);
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
      handleChange, categorias,
    } = this.props;

    return (
      <select
        name="categoria"
        onChange={(handleChange)}
      >
        <option value="">Selecione</option>
        {
          categorias.data.map(categoria => (
            <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
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
  withFormik({
    mapPropsToValues: () => ({
      codigo: '',
      title: '',
      departamento: [],
      categoria: '',
    }),

    validationSchema: Yup.object().shape({
      codigo: Yup.string().required('Preencha o campo código'),
      title: Yup.string().required('Preencha o campo title'),
      departamento: Yup.array().min(1).required('Selecione no mínimo um departamento'),
      categoria: Yup.string().required('Selecione no mínimo uma categoria'),
    }),

    validateOnChange: false,

    handleSubmit: (values) => {
      console.log(values);
    },
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(formDocumentos);
