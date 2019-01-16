import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/reactotron';

import Routes from '~/routes';
import { store, persistor } from '~/store';

import GlobalStyle from '~/styles/global';
import { Wrapper, Container } from './styles';

// persistor.purge();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<p>Loading</p>} persistor={persistor}>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Routes />
          </Container>
        </Wrapper>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
