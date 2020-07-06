import { InMemoryCache, HttpLink, ApolloClient } from 'apollo-boost';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://n4pky2nyw0.sse.codesandbox.io/',
    headers: {
        authorization: localStorage.getItem('token') || '',
    },
});

const apolloClient = new ApolloClient({
    link,
    cache,
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `${token}` : '',
            },
        });
    },
});

export default apolloClient;
