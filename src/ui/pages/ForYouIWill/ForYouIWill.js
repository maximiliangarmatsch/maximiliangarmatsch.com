import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import MobileStepsLayout from '../../components/Layouts/MobileStepsLayout';
import DesktopStepsLayout from '../../components/Layouts/DesktopStepsLayout';
import ForYouIWillBody from './ForYouIWillBody';

export default function ForYouIWill() {
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: t('For you, I will...'),
        ButtonText: t('Last step'),
        to: '/contact',
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsLayout {...layoutProperty}>
                    <ForYouIWillBody />
                </DesktopStepsLayout>
            ) : (
                <MobileStepsLayout {...layoutProperty}>
                    <ForYouIWillBody />
                </MobileStepsLayout>
            )}
        </>
    );
}
