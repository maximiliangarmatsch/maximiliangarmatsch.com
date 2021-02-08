import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import LayoutStepsDesktop from '../../components/Layouts/LayoutStepsDesktop';
import LayoutStepsMobile from '../../components/Layouts/LayoutStepsMobile';
import DeviceProvider from '../../../helpers/DeviceProvider';

export default function SuccessScreen() {
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
}
