import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import { Link } from 'react-router-dom';

import { FaEdit, FaTrash } from 'react-icons/fa';

import { DocumentosTable, DocumentosItem } from './styles';

class Documentos extends Component {
  static propTypes = {
    deleteDocumentosRequest: PropTypes.func.isRequired,
    getDocumentosRequest: PropTypes.func.isRequired,
    documentos: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        codigo: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        departamento: PropTypes.arrayOf(PropTypes.shape({})),
        categoria: PropTypes.arrayOf(PropTypes.shape({})),
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getDocumentosRequest } = this.props;
    getDocumentosRequest();
  }

  handleRemove = (data) => {
    const { deleteDocumentosRequest } = this.props;

    const toastrConfirmOptions = {
      onOk: () => deleteDocumentosRequest(data),
    };

    toastr.confirm('Deseja realmente excluir este documento?', toastrConfirmOptions);
  }

  renderDocumentos = ({ data }) => (
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
        {!data.length ? (
          <tr>
            <td colSpan={2}>Nenhuma documento cadastrado</td>
          </tr>
        ) : (
          data.map(item => (
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
  )

  render() {
    const { documentos } = this.props;
    const { loading } = documentos;

    return loading ? (
      <p>Loading</p>
    ) : (
      this.renderDocumentos(documentos)
    );
  }
}

const mapStateToProps = state => ({
  documentos: state.documentos,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DocumentosActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Documentos);
