import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

import Loading from '~/components/Loading';

const Field = ({ children, title, loading }) => (
  <Container>
    <Title>{title}</Title>
    {
      loading
        ? <Loading />
        : children
    }
  </Container>
);


Field.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Field.defaultProps = {
  loading: false,
};

export default Field;
