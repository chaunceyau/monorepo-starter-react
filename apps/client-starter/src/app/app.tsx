import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../index.css';
import { useViewer } from '../hooks/useViewer';
import { LoginPage } from '../pages/auth/login';
import { ViewportLoading } from '../pages/loading';
import { DashboardPage } from '../pages/dashboard';
import { RegistrationPage } from '../pages/auth/register';

export function App() {
  const user = useViewer();
  if (typeof user === 'undefined') {
    return <ViewportLoading />;
  }
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;

const AuthenticatedApp = () => (
  <Router>
    <Route path="/">
      <DashboardPage />
    </Route>
  </Router>
);

const UnauthenticatedApp = () => (
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
