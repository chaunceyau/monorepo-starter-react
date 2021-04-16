import React from 'react';
import { sidebarLinks } from '../../app/routes';
import { MultiNavLayout } from '../../components/layouts/multi-nav/layout';

export function DashboardPage() {
  React.useEffect(() => {
    fetch('/api/account/hm', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((d) => console.log({ d }));
  }, []);

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
