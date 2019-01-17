import React from 'react';
import PropTypes from 'prop-types';

const Categorias = ({ setFieldValue, categorias, values }) => (
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

Categorias.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  categorias: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    loading: PropTypes.bool,
  }),
  values: PropTypes.shape({
    codigo: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    departamento: PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
    categoria: PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
  }).isRequired,
};

Categorias.defaultProps = {
  categorias: [],
};

export default Categorias;
