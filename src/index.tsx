import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import * as serviceWorker from './serviceWorker'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.register();
