import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import { withUserService } from '../hoc';
import { LogInPage, SignUpPage, WelcomePage } from '../pages';

// userService is available in the props
// thanks to wrapping App with a hoc component
// withUserService
const App = ({ userService }) => {
  return (
    <main role="main" className="container">
      <Switch>

        <Route
          path="/"
          component={WelcomePage}
          exact />

        <Route
          path="/login"
          component={LogInPage}
          exact />

        <Route
          path="/signup"
          component={SignUpPage}
          exact />

      </Switch>
    </main>
  )
}

export default withUserService()(App);
