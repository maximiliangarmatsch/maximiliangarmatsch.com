import React from 'react';
import { Box } from '../Base/Base';

interface IconCheckpointProps {
    size: any;
    children: any;
}
const IconCheckpoint: React.FC<IconCheckpointProps> = ({ size, children }) => {
    return (
        <Box
            borderRadius="50%"
            width={size}
            height={size}
            bg="#191919"
            css={`
                box-shadow: 0px 0px 16px #000000;
            `}
            display="flex"
            justifyContent="center"
            alignItems="center"
            data-testid="iron-checkpoint"
        >
            {children}
        </Box>
    );
};

export default IconCheckpoint;
