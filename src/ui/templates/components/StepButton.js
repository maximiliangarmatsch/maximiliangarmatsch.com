import React from 'react';
import { Box } from '../../components/Base/Base';
import IconButtonBig from '../../pages/Landingpage/components/IconButtonBig';

export default function StepButton({ to, text, lastStep }) {
    return (
        <Box
            type="submit"
            m={{ _: '0 20px', lg: '0' }}
            width="calc(100% - 80px)"
            height="50px"
            position="absolute"
            bottom={{ _: '50px', lg: '50px' }}
            className="submit-btn"
            display={
                window.location.pathname === '/contactform' ? 'none' : 'block'
            }
        >
            <IconButtonBig type="submit" as="button" to={to} newTab={lastStep}>
                {text}
            </IconButtonBig>
        </Box>
    );
}
