import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../../components/Base/Base';
import BackgroundLayerDesktop from '../../components/Layers/BackgroundLayerDesktop';
import IconButtonBig from '../../components/Buttons/IconButtonBig';
import TextWelcome from './TextWelcome';
// import LoginButton from './components/LoginButton';
// import UserNameText from './components/UserNameText';

export default function LandingPageDesktop() {
    const { t } = useTranslation();
    return (
        <BackgroundLayerDesktop>
            <Box
                maxWidth={{ lg: '550px', xl: '650px', xxl: '800px' }}
                position="absolute"
                top="calc(50% + 45px)"
                right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                css={`
                    transform: translateY(calc(-50%));
                `}
                zIndex="5"
            >
                <TextWelcome />
                <Box height="50px" width="70%" mt="25px">
                    <IconButtonBig to="/aboutme">
                        {t('Learn more')}
                    </IconButtonBig>
                </Box>
            </Box>

            <Box
                maxWidth={{ lg: '550px', xl: '650px', xxl: '800px' }}
                position="absolute"
                top="calc(75% - 30px)"
                left={{ lg: '2%', xl: '2%', xxl: '2%' }}
                zIndex="5"
            >
                {/*<Box height="50px" mt="25px">*/}
                {/*    <LoginButton />*/}
                {/*    <UserNameText />*/}
                {/*</Box>*/}
            </Box>
        </BackgroundLayerDesktop>
    );
}
