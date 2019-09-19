import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import UserService from './services/user-service';
import { UserServiceProvider } from './components/user-service-context';

import store from './store';

const userService = new UserService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <UserServiceProvider value={userService}>
        <Router>
          <App />
        </Router>
      </UserServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
