import React from 'react';
import { FullPageLoading } from '../../loading/full-page';
import { Link, SidebarMenu } from './menu';

interface MultiNavLayoutProps {
  sidebarLinks: Array<Link>;
  logo: { to: string; component: React.ReactNode };
  loading?: boolean;
  error?: string;
}

export function MultiNavLayout(props: MultiNavLayoutProps) {
  const location = '/archive'; // uselcoation
  const match = props.sidebarLinks.find((link) => link.to === location);
  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <SidebarMenu
        to={props.logo.to}
        logo={props.logo.component}
        links={props.sidebarLinks}
      />
      <div className="min-h-0 flex-1 flex overflow-hidden">
        {/* <!-- Narrow sidebar--> */}
        <SidebarNavigation links={props.sidebarLinks} />
        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex p-4">
          {renderMainContent(!!props.loading, !!props.error, match.component)}
        </main>
      </div>
    </div>
  );
}

function renderMainContent(loading, error, component) {
  if (loading) return <FullPageLoading />;
  if (error) return <span>error loading</span>;
  return component;
}

function SidebarNavigation(props: { links: Array<Link> }) {
  return (
    <nav
      aria-label="Sidebar"
      className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto"
    >
      <div className="relative w-20 flex flex-col p-3 space-y-3">
        {props.links.map((link) => (
          <SidebarItem link={link} />
        ))}
      </div>
    </nav>
  );
}

function SidebarItem({ link }: { link: Link }) {
  const location = '/archive'; // uselcoation
  const linkActive = link.to === location;

  return (
    <a
      href="#"
      className={`text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg ${
        linkActive && 'bg-gray-900'
      }`}
    >
      <span className="sr-only">{link.label}</span>
      <link.icon />
    </a>
  );
}
