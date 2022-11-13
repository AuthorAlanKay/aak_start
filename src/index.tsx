import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MuiThemeConfig } from './config/MuiThemeConfig';
import { RootLayout } from './layouts/RootLayout';
import reportWebVitals from './reportWebVitals';
import { Root } from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Root />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MuiThemeConfig>
      <RouterProvider router={router} />
    </MuiThemeConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
