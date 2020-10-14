import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import ForYouIWillBody from './ForYouIWillBody';

export default function ForYouIWill() {
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const templateProperty = {
        title: t('For you, I will...'),
        ButtonText: t('Last step'),
        to: '/contactform',
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsTemplate {...templateProperty}>
                    <ForYouIWillBody />
                </DesktopStepsTemplate>
            ) : (
                <MobileStepsTemplate {...templateProperty}>
                    <ForYouIWillBody />
                </MobileStepsTemplate>
            )}
        </>
    );
}
