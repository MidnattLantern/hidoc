import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { AccountDataProvider } from './contexts/AccountDataContext';

ReactDOM.render(
//  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <AccountDataProvider>
          <App/>
        </AccountDataProvider>
      </CurrentUserProvider>
    </Router>,
//  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
