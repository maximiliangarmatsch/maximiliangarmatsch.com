Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
        name: 'loginViaAuth0',
    });
    const options = {
        method: 'POST',
        url: process.env.REACT_APP_AUTH_URL,
        body: {
            grant_type: 'password',
            username: process.env.REACT_APP_AUTH_USERNAME,
            password: process.env.REACT_APP_AUTH_PASSWORD,
            audience: process.env.REACT_APP_AUTH_AUDIENCE,
            scope: 'openid profile email',
            client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
            client_secret: process.env.REACT_APP_AUTH_CLIENT_SECRET,
            failOnStatusCode: false,
        },
    };
    cy.request(options);
});
