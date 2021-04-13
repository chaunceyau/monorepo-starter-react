import React from 'react';
import { sidebarLinks } from './routes';
import { MultiNavLayout } from '../components/layouts/multi-nav/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../index.css';
import { LoginPage } from '../pages/auth/login';
import { RegistrationPage } from '../pages/auth/register';
import { useAuth } from '../hooks/useAuth';

const BASE_ROUTES = [
  {
    path: '/auth/login',
    component: LoginPage,
  },
  {
    path: '/auth/register',
    component: RegistrationPage,
  },
];

export function App() {
  const user = useAuth();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;

const AuthenticatedApp = () => (
  <Router>
    <MultiNavLayout
      sidebarLinks={sidebarLinks}
      logo={{
        to: '/',
        component: (
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
            alt="Workflow"
          />
        ),
      }}
    />
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
// return <TopNavigationLayout>lmao</TopNavigationLayout>;
