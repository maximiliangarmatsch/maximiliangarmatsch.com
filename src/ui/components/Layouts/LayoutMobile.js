import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '../Base/Base';
import Header from '../Header/Header';

export default function LayoutMobile({ children }) {
    return (
        <>
            <Box as={Grid} container mb="4rem">
                <Box
                    width="100%"
                    height="60px"
                    position="fixed"
                    top="0"
                    zIndex="10"
                >
                    <Header p={{ _: '0 10px', sm: '0 20px', md: '0 60px' }} />
                </Box>
            </Box>
            <Box as={Grid} container>
                {children}
            </Box>
        </>
    );
}
