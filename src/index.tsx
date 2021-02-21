import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider as AuthProvider } from '@auth0/auth0-react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './ui/App';
import apolloClient from './data/apolloClient';
Sentry.init({
    dsn:
        'https://2e9b5cb0425e4e8b98aa41b38ef41770@o446659.ingest.sentry.io/5448657',
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0,
});

//test

const authSetUp: any = {
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
