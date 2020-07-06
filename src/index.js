import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider as AuthProvider } from '@auth0/auth0-react';
import App from './ui/App';
import apolloClient from './data/apolloClient';
import config from './config/authConfig.json';
// import * as serviceWorker from './config/serviceWorker';

const authSetUp = {
    domain: config.DOMAIN,
    clientId: config.CLIENTID,
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
