import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../../../Base/Base';

export default function TextPartnerRole() {
    const { t } = useTranslation();

    return (
        <Text color="green">
            {t('Developer since 2001')}
            <br />
            {t('Professional since 2009')}
            <br />
            {t('Team Lead since 2018')}
            <br />
        </Text>
    );
}
