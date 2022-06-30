import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import { AppProviders } from '@/context';
// import {loadDevTools} from 'dev-tools/load'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AppProviders>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProviders>
    </HelmetProvider>
  </StrictMode>
);
