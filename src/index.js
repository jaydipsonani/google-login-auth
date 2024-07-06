import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-vwx0aykjly1yxcy4.us.auth0.com"
  //   clientId="MbE2wv8FPVI8FONNK2FHo8lI6vqABPLz"
  //   useRefreshTokens={true}
  //   useRefreshTokensFallback={false}
  //   redirectUri={window.location.origin}
  // >
  //   <App />
  // </Auth0Provider>


  <Auth0Provider
    domain="dev-vwx0aykjly1yxcy4.us.auth0.com"
    clientId="MbE2wv8FPVI8FONNK2FHo8lI6vqABPLz"
    // useRefreshTokens={true}
    // useRefreshTokensFallback={false}
    redirectUri={window.location.origin}
    // authorizationParams={{
    //   redirect_uri: "YOUR_PACKAGE_ID://dev-vwx0aykjly1yxcy4.us.auth0.com/capacitor/YOUR_PACKAGE_ID/callback"
    // }}
  >
    <App />
  </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
