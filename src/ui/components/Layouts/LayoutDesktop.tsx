import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '../Base/Base';
import Header from '../Header/Header';

interface LayoutDesktopProps {
    children?: any;
    showFormBtn?: boolean;
}

const LayoutDesktop: React.FC<LayoutDesktopProps> = ({
    children,
    showFormBtn,
}) => {
    return (
        <Box as={Grid} container>
            <Box as={Grid} container mb="10rem">
                <Box
                    width="100%"
                    height={{ lg: '60px', xl: '70px', xxl: '100px' }}
                    position="fixed"
                    top={0}
                    left={0}
                    zIndex="10"
                >
                    <Header showFormBtn={showFormBtn} p="0 5%" />
                </Box>
            </Box>
            <Box as={Grid} item container>
                <Box as={Grid} item sm={2} />
                <Box as={Grid} item sm={8}>
                    {children}
                </Box>
                {/*<PortfolioIcons />*/}
            </Box>
        </Box>
    );
};
export default LayoutDesktop;
