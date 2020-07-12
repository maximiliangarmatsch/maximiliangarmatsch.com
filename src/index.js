import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider as AuthProvider } from '@auth0/auth0-react';
import App from './ui/App';
import apolloClient from './data/apolloClient';

console.log(process.env.REACT_APP_AUTH_CLIENT_ID)

const authSetUp = {
    domain: process.env.REACT_APP_AUTH_DOMAIN,
    clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
    cacheLocation: 'localstorage',
    redirectUri: window.location.origin,
};


ReactDOM.render(
    <AuthProvider {...authSetUp}>
        <ApolloProvider client={apolloClient}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </AuthProvider>,
    document.getElementById('root')
);

// serviceWorker.register();
