import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import { Box } from '../../components/Base/Base';
import LayoutStepsDesktop from '../../components/Layouts/LayoutStepsDesktop';
import LayoutStepsMobile from '../../components/Layouts/LayoutStepsMobile';
import DeviceProvider from '../../../helpers/DeviceProvider';
import AchievementsBody from './AchievementsBody';

export default function AboutMe() {
    const isDesktop = useContext(SizeContext);
    const { t } = useTranslation();

    const layoutProperty = {
        title: t('About Me'),
        ButtonText: t('What I will do for you'),
        to: '/foryouiwill',
    };

    return (
        <DeviceProvider>
            {isDesktop ? (
                <LayoutStepsDesktop {...layoutProperty}>
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
                </LayoutStepsDesktop>
            ) : (
                <LayoutStepsMobile {...layoutProperty}>
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
                </LayoutStepsMobile>
            )}
        </DeviceProvider>
    );
}
