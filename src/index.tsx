import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { FilterProvider, UIProvider } from './context';

import { lightTheme } from './themes';
import { App } from './App';
import "./index.css"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilterProvider>
      <UIProvider>
      <ProSidebarProvider>
        <BrowserRouter>
          <CssBaseline/>
          <ThemeProvider theme={ lightTheme }>
            <App/>
          </ThemeProvider>
        </BrowserRouter>
        </ProSidebarProvider>
      </UIProvider>
    </FilterProvider>
  </React.StrictMode>
);

