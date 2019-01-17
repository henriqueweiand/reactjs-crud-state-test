import React from 'react';
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

Field.defaultProps = {
  loading: false,
};

export default Field;
