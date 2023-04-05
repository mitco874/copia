import React from 'react';
import ReactDOM from 'react-dom/client';

import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { EmployeeProvider, FilterProvider, UIProvider } from './context';

import { App } from './App';
import "./index.css";
import { lightTheme } from './themes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EmployeeProvider>
      <FilterProvider>
        <UIProvider>
          <ProSidebarProvider>
            <BrowserRouter>
              <CssBaseline />
              <ThemeProvider theme={lightTheme}>
                <App />
              </ThemeProvider>
            </BrowserRouter>
          </ProSidebarProvider>
        </UIProvider>
      </FilterProvider>
    </EmployeeProvider>
  </React.StrictMode>
);

