import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import LetsGetStartedBody from './LetsGetStartedBody';

export default function LetsGetStarted() {
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const templateProperty = {
        title: t(`Let's get started.`),
        ButtonText: t('Submit'),
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsTemplate {...templateProperty}>
                    <LetsGetStartedBody />
                </DesktopStepsTemplate>
            ) : (
                <MobileStepsTemplate {...templateProperty}>
                    <LetsGetStartedBody />
                </MobileStepsTemplate>
            )}
        </>
    );
}
