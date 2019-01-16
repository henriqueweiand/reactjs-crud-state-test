import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '~/config/reactotron';

import Routes from '~/routes';
import store from '~/store';

import GlobalStyle from '~/styles/global';
import { Wrapper, Container } from './styles';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Routes />
        </Container>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
