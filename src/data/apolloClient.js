import { InMemoryCache, HttpLink, ApolloClient } from 'apollo-boost';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: process.env.REACT_APP_DATASOURCE_URI,
    headers: {
        authorization: localStorage.getItem('token') || '',
    },
});

const apolloClient = new ApolloClient({ link, cache });

export default apolloClient;
