import React from 'react';
//
import { ArchiveIcon } from '../components/icons/archive';
import { PortaitIcon } from '../components/icons/portrait';
import { PencilAltIcon } from '../components/icons/pencil-alt';

export const sidebarItems = [
  {
    to: '/',
    label: 'portraits',
    icon: PortaitIcon,
  },
  {
    to: '/2',
    label: 'archive',
    icon: ArchiveIcon,
  },
  {
    to: '/drafts',
    label: 'drafts',
    icon: PencilAltIcon,
  },
];

export const BASE_ROUTES = [
  {
    to: '/team',
    label: 'team',
    component: () => (
      <div>
        <span>team PAGE</span>
      </div>
    ),
  },
  {
    to: '/',
    label: 'dashboard',
    component: () => (
      <div>
        <span>dashboard PAGE</span>
      </div>
    ),
    // component: () => <DashboardPage />,
  },
];
