import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import LayoutStepsDesktop from '../../components/Layouts/LayoutStepsDesktop';
import LayoutStepsMobile from '../../components/Layouts/LayoutStepsMobile';
import DeviceProvider from '../../../helpers/DeviceProvider';

const SuccessScreen: React.FC = () => {
    const { t } = useTranslation();

    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: t(`Form successfully submitted`),
        ButtonText: t('Back To Home'),
        to: '/',
    };
    return (
        <DeviceProvider>
            {isDesktop ? (
                <LayoutStepsDesktop {...layoutProperty}></LayoutStepsDesktop>
            ) : (
                <LayoutStepsMobile {...layoutProperty}></LayoutStepsMobile>
            )}
        </DeviceProvider>
    );
};

export default SuccessScreen;
