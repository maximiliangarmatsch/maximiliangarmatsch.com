import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from '../../components/Base/Base';
import BackgroundLayerMobile from '../../components/Layers/BackgroundLayerMobile';
import IconButtonBig from '../../components/Buttons/IconButtonBig';
import TextWelcome from './TextWelcome';
// import LoginButton from './components/LoginButton';

export default function LandingPageMobile() {
    return (
        <BackgroundLayerMobile>
            <Box
                zIndex={2}
                p="0"
                textAlign="center"
                position="absolute"
                bottom="15px"
                minHeigth="600px"
                maxWidth="calc(100% - 40px);"
                width="100%"
                left="50%"
                css={`
                    transform: translateX(-50%);
                `}
            >
                <TextWelcome />
                <Box height="50px" width="100%" mt="25px">
                    <IconButtonBig to="/aboutme">
                        <FormattedMessage defaultMessage="Learn more" />
                    </IconButtonBig>
                </Box>
                {/*<Box height="50px" width="100%" mt="25px">*/}
                {/*    <LoginButton />*/}
                {/*</Box>*/}
            </Box>
        </BackgroundLayerMobile>
    );
}
