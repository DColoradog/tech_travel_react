import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App // 2da manera
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

