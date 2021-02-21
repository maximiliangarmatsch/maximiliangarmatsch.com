import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../../components/Base/Text';
import { Text } from '../../../components/Base/Base';

const NetworkAccess: React.FC = () => {
    const { t } = useTranslation();
    const span = (chunks: any) => (
        <Text as="span" color="white">
            {chunks}
        </Text>
    );
    return (
        <div>
            <H2>{t('2. Network Access')}</H2>
            <P>
                {t(
                    `Maximilian Garmatsch’s associates are located throughout the world and connect to the internet through our service provider’s VPN ${(
                        <span>virtual private network</span>
                    )} service, which is SSL ${(
                        <span>secure sockets layer</span>
                    )} secured with 256-bit encryption.`
                )}
            </P>
        </div>
    );
};

export default NetworkAccess;
