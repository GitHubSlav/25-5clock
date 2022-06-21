import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import Clock from './components/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
