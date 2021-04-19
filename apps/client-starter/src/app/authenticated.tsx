import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { BASE_ROUTES, sidebarItems } from './routes';
import { MultiNavLayout } from '../components/layouts/multi-nav/layout';

export const AuthenticatedApp = () => (
  <MultiNavLayout logo={<span>4</span>} sidebarItems={sidebarItems}>
    <Switch>
      {BASE_ROUTES.map((r) => (
        <Route key={r.to} path={r.to}>
          <r.component />
        </Route>
      ))}
    </Switch>
  </MultiNavLayout>
);
