import React from 'react';

import '../index.css';
import { useViewer } from '../hooks/useViewer';
import { ViewportLoading } from '../pages/loading';
import { AuthenticatedApp } from './authenticated';
import { UnauthenticatedApp } from './unauthenticated';

export function App() {
  const user = useViewer();
  if (typeof user === 'undefined') {
    return <ViewportLoading />;
  }
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
