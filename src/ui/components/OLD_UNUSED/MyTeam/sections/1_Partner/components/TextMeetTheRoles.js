import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../../../Base/Base';

export default function TextMeetTheRoles({ bottom }) {
    const { t } = useTranslation();

    return (
        <Text
            as="p"
            textAlign="center"
            position="absolute"
            left="50%"
            css={`
                transform: translateX(-1%);
            `}
            bottom={bottom}
        >
            {t('Meet the roles in our team!')}
        </Text>
    );
}
