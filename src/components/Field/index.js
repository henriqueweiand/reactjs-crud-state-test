import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Error } from './styles';

import Loading from '~/components/Loading';

const Field = ({
  children, title, loading, error,
}) => (
  <Container error={error}>
    <Title>{title}</Title>
    <Error error={error}>
      {error}
    </Error>
    {
      loading
        ? <Loading />
        : children
    }

  </Container>
);

Field.propTypes = {
  error: PropTypes.string,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Field.defaultProps = {
  loading: false,
  error: '',
};

export default Field;
