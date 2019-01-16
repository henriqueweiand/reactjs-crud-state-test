import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';
import { Wrapper, Container } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Routes />
        </Container>
      </Wrapper>
    </BrowserRouter>
  </Fragment>
);

export default App;
