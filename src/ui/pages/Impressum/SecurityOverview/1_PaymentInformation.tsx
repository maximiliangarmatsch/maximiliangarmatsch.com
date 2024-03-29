import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../../components/Base/Text';
import { Text } from '../../../components/Base/Base';

const PaymentInformation: React.FC = () => {
    const { t } = useTranslation();
    const span = (chunks: any) => (
        <Text as="span" color="white">
            {chunks}
        </Text>
    );
    return (
        <div>
            <H2>{t('1. Payment Information')}</H2>
            <P>
                {t(
                    `Your credit card details processed and stored with our merchant and payment gateway service providers comply with the PCI DSS ${(
                        <span>
                            Payment Card Industry Data Security Standards
                        </span>
                    )}.`
                )}
            </P>
        </div>
    );
};

export default PaymentInformation;
