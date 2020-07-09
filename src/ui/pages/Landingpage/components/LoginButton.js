import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '../../../components/Base/Base';

export default function LoginButton() {
    const {
        user,
        loginWithRedirect,
        logout,
        getAccessTokenSilently,
    } = useAuth0();

    useEffect(() => {
        const setToken = async () => {
            if (user) {
                const token = await getAccessTokenSilently();
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        };
        setToken();
    }, [getAccessTokenSilently, user]);

    return (
        <Box
            as="button"
            width="100%"
            minHeight="100%"
            mt="25px"
            bg="green"
            borderRadius="14px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="deepBlack"
            fontSize="18px"
            fontWeight="500"
            border="none"
            style={{ cursor: 'pointer' }}
            css={`
                box-shadow: 0px 0px 6px #0cd58c;
                box-sizing: border-box;
                &:focus {
                    outline: none;
                }
            `}
            onClick={() => (user ? logout() : loginWithRedirect())}
        >
            {user ? 'LOGOUT' : 'LOGIN'}
        </Box>
    );
}
