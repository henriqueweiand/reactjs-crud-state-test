import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withFormik } from 'formik';

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
      handleChange, values, departamentos: { data },
    } = this.props;

    return (
      <select
        name="departamentos"
        value={values.titulo}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        {
          data.map(departamento => (
            <option key={departamento.id} value={departamento.id}>{departamento.name}</option>
          ))
        }
      </select>
    );
  }

  render() {
    const {
      isSubmitting, handleSubmit, handleChange, values, departamentos,
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
            name="titulo"
            type="text"
            value={values.titulo}
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
          <input placeholder="categoria" />
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
      titulo: '',
      departamentos: [],
      categorias: '',
    }),

    handleSubmit: (values) => {
      console.tron.log(values);
    },
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(formDocumentos);
