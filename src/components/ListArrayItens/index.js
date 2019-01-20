import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

const ListArrayItens = ({
  data, params, customComponent, css,
}) => (
  <Fragment>
    {
      data.map((item) => {
        const id = item[params.id];
        const label = item[params.label];

        return (
          <Container key={id} css={css}>
            <Title css={css}>
              {label}
            </Title>

            {customComponent(item)}
          </Container>
        );
      })
    }
  </Fragment>
);

ListArrayItens.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  css: PropTypes.shape({}),
  customComponent: PropTypes.func,
};

ListArrayItens.defaultProps = {
  customComponent: () => {},
  css: {},
};

export default ListArrayItens;
