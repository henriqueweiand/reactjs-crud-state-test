import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import { Creators as DepartamentosActions } from '~/store/ducks/departamentos';
import { Creators as CategoriasActions } from '~/store/ducks/categorias';

// import { DocumentosTable, DocumentosItem } from './styles';

class formDocumentos extends Component {
  componentDidMount() {
    this.props.getCategoriasRequest();
    this.props.getCategoriasRequest();
  }

  render() {
    return (
      <p>formDocumentos</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(formDocumentos);
