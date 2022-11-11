import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouter } from './@core/router/router';
import './index.scss';

const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);

const main = (
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);

root.render(main);