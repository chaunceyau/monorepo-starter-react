import React from 'react';
import tw from 'twin.macro';
import { TopNavigation } from './top-nav';

interface TopNavigationLayout {
  children: React.ReactNode;
}

export function TopNavigationLayout(props: TopNavigationLayout) {
  return (
    <div className="h-screen bg-gray-50">
      <TopNavigation />
      <main className={`h-full pt-4 ${topNavigationLayoutWidthConstraints}`}>
        {props.children}
      </main>
    </div>
  );
}

export const topNavigationLayoutWidthConstraints = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'