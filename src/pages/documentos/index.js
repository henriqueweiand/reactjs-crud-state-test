import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DocumentosActions } from '~/store/ducks/documentos';

import { DocumentosTable, DocumentosItem } from './styles';

class Documentos extends Component {
  componentDidMount() {
    this.props.getDocumentosRequest();
  }

  renderDocumentos = () => {
    const documentos = this.props.documentos.data;

    return (
      <DocumentosTable cellPadding={0} cellSpacing={0}>
        <thead>
          <th>Id</th>
          <th>Nome</th>
        </thead>

        <tbody>
          {!documentos ? (
            <tr>
              <td colSpan={5}>Nenhuma documento cadastrado</td>
            </tr>
          ) : (
            documentos.map(item => (
              <DocumentosItem
                key={item.id}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
              </DocumentosItem>
            ))
          )}
        </tbody>
      </DocumentosTable>
    );
  }

  render() {
    return this.props.documentos.loading ? (
      <p>Loading</p>
    ) : (
      this.renderDocumentos()
    );
  }
}

const mapStateToProps = state => ({
  documentos: state.documentos,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DocumentosActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Documentos);
