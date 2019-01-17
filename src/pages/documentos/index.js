import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import Loading from '~/components/Loading';

import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  DocumentosTable, TableReponsive, Container, Head, Button, Title,
} from './styles';


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
    <TableReponsive>
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
              <tr
                key={item.codigo}
              >
                <td>{item.codigo}</td>
                <td>{item.title}</td>
                <td>{JSON.stringify(item.departamento)}</td>
                <td>{JSON.stringify(item.categoria)}</td>
                <td>{moment(item.date).format('DD/MM/YYYY')}</td>
                <td>
                  <Link to={`/documentos/${item.codigo}`}>
                    <FaEdit title="Editar" />
                  </Link>
                  <FaTrash
                    title="Remover"
                    onClick={() => this.handleRemove(item)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </DocumentosTable>
    </TableReponsive>
  )

  render() {
    const { documentos } = this.props;
    const { loading } = documentos;

    return loading ? (
      <Loading />
    ) : (
      <Container>
        <Head>
          <Title>Lista de documentos</Title>
          <Link to="/documentos/create">
            <Button
              type="button"
            >
              Adicionar
            </Button>
          </Link>
        </Head>
        {this.renderDocumentos(documentos)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  documentos: state.documentos,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DocumentosActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Documentos);
