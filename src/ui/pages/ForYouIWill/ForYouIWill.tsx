import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import LayoutStepsMobile from '../../components/Layouts/LayoutStepsMobile';
import LayoutStepsDesktop from '../../components/Layouts/LayoutStepsDesktop';
import DeviceProvider from '../../../helpers/DeviceProvider';
import ForYouIWillBody from './ForYouIWillBody';

const ForYouIWill: React.FC = () => {
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: t('For you, I will...'),
        ButtonText: t('Last step'),
        to: '/contact',
    };
    return (
        <DeviceProvider>
            {isDesktop ? (
                <LayoutStepsDesktop {...layoutProperty}>
                    <ForYouIWillBody />
                </LayoutStepsDesktop>
            ) : (
                <LayoutStepsMobile {...layoutProperty}>
                    <ForYouIWillBody />
                </LayoutStepsMobile>
            )}
        </DeviceProvider>
    );
};

export default ForYouIWill;
