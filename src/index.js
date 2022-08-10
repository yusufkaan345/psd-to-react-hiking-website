import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

const REACT_APP_AUTH0_DOMAIN='dev-oxz43rlr.us.auth0.com'
const REACT_APP_AUTH0_CLINT_ID='tLlKGbKoO3U0r83iQuaI37GujlYTX93A'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider domain={REACT_APP_AUTH0_DOMAIN} clientId={REACT_APP_AUTH0_CLINT_ID} redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
);

