import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './style/CSS/normalize.css';
import './style/SASS/main.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
