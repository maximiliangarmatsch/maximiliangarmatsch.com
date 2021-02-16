import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box } from '../Base/Base';

interface IconProps {
    to?: any;
    iconSrc?: any;
    alt?: any;
    width?: any;
    height?: any;
    margin?: any;
    target?: any;
    href?: any;
}
const Icon: React.FC<IconProps> = ({
    to,
    iconSrc,
    alt,
    width,
    height,
    margin,
    target,
    href,
}) => {
    return (
        <Flex
            as={!href ? Link : 'a'}
            target={target}
            m={margin || { _: '10px 20px', sm: '10px 20px', md: '0px' }}
            pb={{ md: '0px' }}
            width={width || 'auto'}
            height={height || 'auto'}
            to={to}
            href={href}
        >
            <Box as="img" width="100%" height="100%" src={iconSrc} alt={alt} />
        </Flex>
    );
};

export default Icon;
