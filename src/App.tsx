import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Layout } from '~/components/Layout';

import { lazyImport } from './components/LazyImport';
import { RouteSuspense } from './components/RouteSuspend';
import path from './configs/path';

const { Home } = lazyImport(() => import('./pages/home'), 'Home');
const { NotFound } = lazyImport(() => import('./pages/notFound'), 'NotFound');
const { JobSchedule } = lazyImport(
  () => import('./pages/jobSchedule'),
  'JobSchedule'
);
const { PunchClock } = lazyImport(
  () => import('./pages/punchClock'),
  'PunchClock'
);

export const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

        <Route
          path={path.PUNCH_CLOCK}
          element={
            <RouteSuspense>
              <PunchClock />
            </RouteSuspense>
          }
        />

        <Route
          path={path.JOB_SCHEDULE}
          element={
            <RouteSuspense>
              <JobSchedule />
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
