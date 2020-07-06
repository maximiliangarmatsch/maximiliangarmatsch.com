import React, { useContext } from 'react';
import { Box } from '../../../components/Base/Base';
import { Auth0Context } from '../../../../context/AuthContext';

export default function LoginButton() {
    const { user, loginWithRedirect, logout } = useContext(Auth0Context);

    return (
        <Box
            as="button"
            width="100%"
            minHeight="100%"
            mt="25px"
            bg="#0DE99A"
            borderRadius="14px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#222222"
            fontSize="18px"
            fontWeight="500"
            border="none"
            style={{ cursor: 'pointer' }}
            css={`
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
