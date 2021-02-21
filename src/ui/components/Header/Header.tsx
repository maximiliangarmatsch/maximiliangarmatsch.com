import React from 'react';
import { Flex } from '../Base/Base';
import TextLogo from './TextLogo';
import HeaderMenu from './HeaderMenu';

interface HeaderProps {
    p?: any;
    showFormBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ p, showFormBtn }) => {
    return (
        <Flex
            as="header"
            height="100%"
            maxWidth="100%"
            p={p}
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
            bg="darkgrey"
        >
            <TextLogo />
            <HeaderMenu showFormBtn={showFormBtn} />
        </Flex>
    );
};
export default Header;
