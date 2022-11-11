import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouter } from './@core/router/router';
import { Logo } from './@shared/components/logo/logo';
import './index.scss';

const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);

const main = (
  <React.StrictMode>
    <Logo />
    <MainRouter />
  </React.StrictMode>
);

root.render(main);


