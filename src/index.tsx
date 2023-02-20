import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './containers/Root';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <Root />
    </Router>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
