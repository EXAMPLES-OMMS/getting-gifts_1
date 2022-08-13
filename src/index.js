import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitExpertApp } from './GitExpertApp';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <GitExpertApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
