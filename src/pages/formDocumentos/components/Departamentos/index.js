import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ContainerArrayCSS, TitleArrayCSS } from './styles';
import ListArrayItens from '~/components/ListArrayItens';

import { Button } from '~/styles/components';

export default class Departamentos extends Component {
  static propTypes = {
    setFieldValue: PropTypes.func.isRequired,
    departamentos: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }),
    values: PropTypes.shape({
      // codigo: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      departamento: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    }).isRequired,
  };

  static defaultProps = {
    departamentos: [],
  };

  state = {
    defaultDepartamento: '',
  }

  render() {
    const {
      setFieldValue, departamentos, values,
    } = this.props;
    const { defaultDepartamento } = this.state;

    return (
      <Fragment>
        <select
          name="departamento"
          value={defaultDepartamento}
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

              this.setState({ defaultDepartamento: '' });
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

        <ListArrayItens
          data={values.departamento}
          params={{
            id: 'id',
            label: 'name',
          }}
          css={{
            container: ContainerArrayCSS,
            title: TitleArrayCSS,
          }}
          customComponent={item => (
            <Button
              size="small"
              color="default"
              type="button"
              onClick={() => {
                const index = values.departamento.indexOf(item);

                values.departamento.splice(index, 1);
                setFieldValue('departamento', values.departamento);
              }}
            >
                Remover
            </Button>
          )}
        />
      </Fragment>
    );
  }
}
