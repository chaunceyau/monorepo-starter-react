import React from 'react';
import { sidebarLinks } from './routes';
import { MultiNavLayout } from '../components/layouts/multi-nav/layout';

import '../index.css';

export function App() {
  return (
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
  );
}

export default App;

// return <TopNavigationLayout>lmao</TopNavigationLayout>;
