import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function SectionCheckpoint({ children, dataTestId }) {
    return (
        <Box
            bg="#222"
            css={`
                @media screen and (max-width: 1024px) and (min-width: 768px) {
                    height: 250px;
                    font-size: 20px;
                    line-height: 40px;
                }
                box-shadow: 0px 0px 16px #000000;
            `}
            borderRadius="12px"
            p="20px 16px"
            fontSize={{ _: '14px', lg: '22px', xl: '19px' }}
            lineHeight={{ _: '16px', lg: '22px', xl: '19px' }}
            fontWeight="300"
            mt={{ _: '15px', lg: '30px' }}
            data-testid={dataTestId}
        >
            {children}
        </Box>
    );
}
