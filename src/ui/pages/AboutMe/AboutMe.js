import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { SizeContext } from '../../../context/SizeContext';
import { Box } from '../../components/Base/Base';
import DesktopStepsLayout from '../../components/Layouts/DesktopStepsLayout';
import MobileStepsLayout from '../../components/Layouts/MobileStepsLayout';
import AchievementsBody from './AchievementsBody';

export default function AboutMe() {
    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: <FormattedMessage defaultMessage="About Me" />,
        ButtonText: (
            <FormattedMessage defaultMessage="What I will do for you" />
        ),
        to: '/foryouiwill',
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsLayout {...layoutProperty}>
                    <Box
                        position="relative"
                        maxWidth="420px"
                        width="100%"
                        height="100%"
                        maxHeight="80%"
                        left="50%"
                        css={`
                            transform: translateX(-50%);
                        `}
                    >
                        <AchievementsBody />
                    </Box>
                </DesktopStepsLayout>
            ) : (
                <MobileStepsLayout {...layoutProperty}>
                    <Box
                        position="relative"
                        maxWidth="400px"
                        width="100%"
                        height="90%"
                        maxHeight={{ _: '500px', sm: '500px', md: '550px' }}
                        left="50%"
                        top={{ _: '40%', sm: '40%', md: '50%' }}
                        css={`
                            transform: translate(-50%, -50%);
                        `}
                    >
                        <AchievementsBody />
                    </Box>
                </MobileStepsLayout>
            )}
        </>
    );
}
