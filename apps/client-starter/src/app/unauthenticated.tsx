import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginPage } from '../pages/auth/login';
import { RegistrationPage } from '../pages/auth/register';

export const UnauthenticatedApp = () => (
  <Router>
    <Switch>
      <Route path="/auth/login">
        <LoginPage />
      </Route>
      <Route path="/auth/register">
        <RegistrationPage />
      </Route>
    </Switch>
  </Router>
);
