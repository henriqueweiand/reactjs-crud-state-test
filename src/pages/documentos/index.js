import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import { Link } from 'react-router-dom';

import { FaEdit, FaTrash } from 'react-icons/fa';

import { DocumentosTable, DocumentosItem } from './styles';

class Documentos extends Component {
  componentDidMount() {
    this.props.getDocumentosRequest();
  }

  handleRemove = (data) => {
    const toastrConfirmOptions = {
      onOk: () => this.props.deleteDocumentosRequest(data),
    };

    toastr.confirm('Deseja realmente excluir este documento?', toastrConfirmOptions);
  }

  renderDocumentos = () => {
    const documentos = this.props.documentos.data;

    return (
      <DocumentosTable cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Departamento</th>
            <th>Categoria</th>
            <th>Data</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {!documentos ? (
            <tr>
              <td colSpan={2}>Nenhuma documento cadastrado</td>
            </tr>
          ) : (
            documentos.map(item => (
              <DocumentosItem
                key={item.codigo}
              >
                <td>{item.codigo}</td>
                <td>{item.title}</td>
                <td>{JSON.stringify(item.departamento)}</td>
                <td>{JSON.stringify(item.categoria)}</td>
                <td>{item.date}</td>
                <td>
                  <Link to={`/documentos/${item.codigo}`}>
                    <FaEdit title="Editar" />
                  </Link>
                  <FaTrash
                    title="Remover"
                    onClick={() => this.handleRemove(item)}
                  />
                </td>
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
