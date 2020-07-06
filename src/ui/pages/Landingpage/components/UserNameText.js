import React, { useContext } from 'react';
import { Box } from '../../../components/Base/Base';
import { Auth0Context } from '../../../../context/AuthContext';

export default function UserNameText() {
    const { user } = useContext(Auth0Context);
    return (
        <Box
            as="button"
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
        >
            {user ? user.name : 'GUEST'}
        </Box>
    );
}
