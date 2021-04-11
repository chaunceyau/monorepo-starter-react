import React from 'react';
import { BanIcon } from '../components/icons/ban';
import { FlagIcon } from '../components/icons/flag';
import { ArchiveIcon } from '../components/icons/archive';
import { PortaitIcon } from '../components/icons/portrait';
import { UserCircleIcon } from '../components/icons/user-circle';
import { PencilAltIcon } from '../components/icons/pencil-alt';

const PortraitsPage = () => (
  <div>
    <span>flamsdlfmsdlamfdlsmafds</span>
  </div>
);

const ArchivePage = () => (
  <div>
    <span>0431502134032194032194301</span>
  </div>
);

export const sidebarLinks = [
  { to: '/', label: 'portraits', icon: PortaitIcon, component: PortraitsPage },
  {
    to: '/archive',
    label: 'archive',
    icon: ArchiveIcon,
    component: ArchivePage,
  },
  {
    to: '/customers',
    label: 'customers',
    icon: UserCircleIcon,
    component: ArchivePage,
  },
  { to: '/flagged', label: 'flagged', icon: FlagIcon, component: ArchivePage },
  { to: '/spam', label: 'spam', icon: BanIcon, component: ArchivePage },
  {
    to: '/drafts',
    label: 'drafts',
    icon: PencilAltIcon,
    component: ArchivePage,
  },
];
