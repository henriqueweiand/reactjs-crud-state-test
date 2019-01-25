import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Loading from '~/components/Loading';
import { Creators as DocumentosActions } from '~/store/ducks/documentos';
import ListArrayItens from '~/components/ListArrayItens';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { DocumentosTable, Container, ContainerArrayCSS } from './styles';
import { Button, Bar, Title } from '~/styles/components';

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
    }),
  };

  static defaultProps = {
    documentos: {
      data: [],
    },
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

    /*
      a chamada do toaster confirm esta gerando warning no browser
      todavia, a correção ja esta a caminho, conforme: https://github.com/diegoddox/react-redux-toastr/issues/220
    */
    toastr.confirm('Deseja realmente excluir este documento?', toastrConfirmOptions);
  }

  renderDocumentos = ({ data }) => (
    <div className="table-responsive">
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
              <td colSpan={6}>Nenhuma documento cadastrado</td>
            </tr>
          ) : (
            data.map(item => (
              <tr
                className="documentosItem"
                key={item.codigo}
              >
                <td>{item.codigo}</td>
                <td>{item.title}</td>
                <td>
                  <ListArrayItens
                    data={item.departamento}
                    params={{
                      id: 'id',
                      label: 'name',
                    }}
                    css={{
                      container: ContainerArrayCSS,
                    }}
                  />
                </td>
                <td>
                  <ListArrayItens
                    data={item.categoria}
                    params={{
                      id: 'id',
                      label: 'name',
                    }}
                    css={{
                      container: ContainerArrayCSS,
                    }}
                  />
                </td>
                <td>
                  {moment(item.date).format('DD/MM/YYYY')}
                </td>
                <td>
                  <Link
                    title="Editar"
                    to={`/documentos/${item.codigo}`}
                  >
                    <FaEdit />
                  </Link>
                  <FaTrash title="Remover" onClick={() => this.handleRemove(item)} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </DocumentosTable>
    </div>
  )

  render() {
    const { documentos } = this.props;

    return (
      <Fragment>
        <Container>
          <Bar>
            <Title>Lista de documentos</Title>
            <Link to="/documentos/create">
              <Button
                type="button"
                color="white"
                size="default"
              >
                  Adicionar
              </Button>
            </Link>
          </Bar>
          {
            documentos.loading
              ? <Loading />
              : this.renderDocumentos(documentos)
          }
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  documentos: state.documentos,
});

const mapDispatchToProps = dispatch => bindActionCreators(DocumentosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Documentos);
