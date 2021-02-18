import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../Base/Base';

interface NavLinkProps {
    to?: any;
    children?: any;
    style?: any;
    fontSize?: any;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, style, fontSize }) => {
    return (
        <Box
            as={Link}
            color="#ffffff"
            fontSize={fontSize ? fontSize : { lg: '18px', xxl: '25px' }}
            css={`
                text-decoration: none;
            `}
            to={to}
            style={style}
        >
            {children}
        </Box>
    );
};

export default NavLink;
