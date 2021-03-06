import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../Base/Base';

interface IconButtonBigProps {
    to?: any;
    children?: any;
    newTab?: boolean;
    type?: any;
    as?: any;
}

const IconButtonBig: React.FC<IconButtonBigProps> = ({
    to,
    children,
    newTab = false,
}) => {
    return (
        <Box
            as={Link}
            to={to}
            target={newTab ? '_blank' : '_self'}
            css={`
                text-decoration: none;
            `}
        >
            <Box
                as="div"
                width="100%"
                minHeight="100%"
                css={`
                    box-shadow: 0px 0px 6px #0cd58c;
                `}
                bg="green"
                borderRadius="12px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="deepBlack"
                fontSize="18px"
                fontWeight="500"
                data-testid="primary-button"
            >
                {children}
            </Box>
        </Box>
    );
};
export default IconButtonBig;
