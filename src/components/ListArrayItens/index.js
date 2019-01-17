import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

const ListArrayItens = ({
  data, params, customComponent, rootCSS,
}) => (
  data.map((item) => {
    const id = item[params.id];
    const label = item[params.label];

    return (
      <Container key={id} rootCSS={rootCSS}>
        <Title>
          {label}
        </Title>

        {!!customComponent && customComponent}
      </Container>
    );
  })
);

ListArrayItens.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.label,
  }).isRequired,
  rootCSS: PropTypes.shape({}),
};

ListArrayItens.defaultProps = {
  customComponent: false,
  rootCSS: {},
};

export default ListArrayItens;
