import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './ui/App';
import { AuthProvider } from './context/AuthContext';
import apolloClient from './data/apolloClient';
import * as serviceWorker from './config/serviceWorker';

ReactDOM.render(
    <AuthProvider>
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
