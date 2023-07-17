import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Layout } from '~/components/Layout';

import { lazyImport } from './components/LazyImport';
import { RouteSuspense } from './components/RouteSuspend';
import path from './configs/path';

const { Home } = lazyImport(() => import('./pages/home'), 'Home');
const { NotFound } = lazyImport(() => import('./pages/notFound'), 'NotFound');

export const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate(path.CLIENT_INFO);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={path.HOME}
          element={
            <RouteSuspense>
              <Home />
            </RouteSuspense>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <RouteSuspense>
            <NotFound />
          </RouteSuspense>
        }
      />
    </Routes>
  );
};
