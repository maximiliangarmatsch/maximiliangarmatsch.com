import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../../../Base/Base';

export default function TextPartnerInfo() {
    const { t } = useTranslation();

    return (
        <Text color="green">
            <Text color="white">
                {t('Your Partner')}
                <br />
            </Text>
            {t('Maximilian Garmatsch, B.Sc')}
            <br />
            {t('Senior Web Engineer')}
            <br />
            {t('Product Manager')}
            <br />
        </Text>
    );
}
