import React from 'react';
import { Typography } from '@material-ui/core';
import { Box } from '../../components/Base/Base';

export default function ContactBody({ onSubmit, isSuccessful }) {
    console.log('### ContactBody ', isSuccessful);
    //todo show a "success screen" if isSuccessful

    return (
        <Box
            maxHeight={{ _: 'calc(100% - 210px)', md: 'auto' }}
            height="100%"
            p="10px"
            pt="0"
            css={`
                @media screen and (max-width: 375px) {
                    overflow: scroll;
                }
            `}
        >
            <Box display="flex" justifyContent="center" alignContent="center">
                <Typography variant="h4" component="h2" color="white">
                    Form successfully submitted
                </Typography>
            </Box>
        </Box>
    );
}
