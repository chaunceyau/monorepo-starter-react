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
    to: '/2',
    label: '2',
    component: () => (
      <div>
        <span>ARCHIVE PAGE</span>
      </div>
    ),
  },
  {
    to: '/',
    label: 'portraits',
    component: () => (
      <div>
        <span>PORTAIT PAGE</span>
      </div>
    ),
    // component: () => <DashboardPage />,
  },
];
