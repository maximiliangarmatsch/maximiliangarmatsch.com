import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '../../../components/Base/Base';

export default function UserNameText() {
    const { user } = useAuth0();
    return (
        <Box
            width="100%"
            minWidth="140px"
            minHeight="100%"
            mt="25px"
            bg="#0DE99A"
            p="10px"
            borderRadius="14px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#222222"
            fontSize="18px"
            fontWeight="500"
            border="none"
            css={`
                box-shadow: 0px 0px 6px #0cd58c;
                box-sizing: border-box;
                &:focus {
                    outline: none;
                }
            `}
        >
            {user ? user.name : 'GUEST'}
        </Box>
    );
}
