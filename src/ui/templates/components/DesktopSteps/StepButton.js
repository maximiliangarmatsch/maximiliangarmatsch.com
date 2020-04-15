import React from 'react';
import { Box } from '../../../components/Base/Base';
import IconButtonBig from '../../../pages/Landingpage/components/IconButtonBig';

export default function StepButton({ to, text, lastStep }) {
    return (
        <Box
            width="calc(100% - 80px)"
            height="50px"
            position="absolute"
            bottom="50px"
        >
            <IconButtonBig to={to} newTab={lastStep}>
                {text}
            </IconButtonBig>
        </Box>
    );
}