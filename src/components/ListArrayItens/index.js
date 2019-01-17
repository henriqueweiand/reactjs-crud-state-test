import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

const ListArrayItens = ({
  data, params, customComponent, css,
}) => (
  data.map((item) => {
    const id = item[params.id];
    const label = item[params.label];

    return (
      <Container key={id} css={css}>
        <Title css={css}>
          {label}
        </Title>

        {!!customComponent && customComponent(item)}
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
};

ListArrayItens.defaultProps = {
  customComponent: false,
  rootCSS: {},
};

export default ListArrayItens;
