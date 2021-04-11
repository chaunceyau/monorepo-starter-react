import React from 'react';
import { sidebarLinks } from './routes';
import { MultiNavLayout } from '../components/layouts/multi-nav/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../index.css';
import { LoginPage } from '../pages/auth/login';
import { RegistrationPage } from '../pages/auth/register';

const BASE_ROUTES = [
  {
    path: '/auth/login',
    component: LoginPage
  },
  {
    path: '/auth/register',
    component: RegistrationPage
  }
]

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth/login">
          <LoginPage />
        </Route>
        <Route path="/auth/register">
          <RegistrationPage />
        </Route>
      </Switch>
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
}

export default App;

// return <TopNavigationLayout>lmao</TopNavigationLayout>;
