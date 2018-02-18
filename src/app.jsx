import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import RootRoute from 'routes/rootRoute';
import { LocalizationContainer } from 'components/main/localizationContainer';

const App = () => (
  <Provider store={store}>
    <LocalizationContainer>
      <RootRoute />
    </LocalizationContainer>
  </Provider>
);

export default App;
