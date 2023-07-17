import { ConfigProvider, message } from 'antd';
import enUS from 'antd/locale/en_US';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import '~/configs/axiosConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import history from '~/utils/history';

import { App } from './App';
import { version } from '../package.json';

import './index.scss';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 2, // week start on TuesDay
});

message.config({
  top: 300,
  duration: 2,
  maxCount: 3,
  rtl: false,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    {import.meta.env.DEV && <ReactQueryDevtools />}
    <ConfigProvider
      locale={enUS}
      theme={{
        token: {
          fontFamily: 'Roboto',
          colorPrimary: '#2E3080',
          borderRadius: 4,
          colorBorderSecondary: '#d9d9d9',
        },
      }}
    >
      <Router history={history as any}>
        <App />
      </Router>
    </ConfigProvider>
  </QueryClientProvider>
);
