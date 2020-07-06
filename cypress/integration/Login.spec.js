describe('testing login by test user', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1440, 660);
        cy.get('button[class*="CookieMessageDesktop"]').click();
    });

    it('should log test user data on console', () => {
        cy.login()
            .then(resp => {
                return resp.body;
            })
            .then(body => {
                const { access_token } = body;
                localStorage.setItem('token', access_token);
                cy.request({
                    method: 'GET',
                    url: 'https://yeehaw69.us.auth0.com/userinfo',
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                    .then(res => res.body)
                    .then(user => console.log(user));
                cy.visit('/');
            });
    });
});
