import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { H2, P } from '../../../components/Base/Text';
import { Text } from '../../../components/Base/Base';

const ChangesToPrivacyPolicy: React.FC = () => {
    const { t } = useTranslation();
    const span = (chunks: any) => (
        <Text as="span" color="white">
            {chunks}
        </Text>
    );
    const A = (chunks: any) => (
        <Text
            as={Link}
            color="white"
            css={`
                text-decoration: none;
                color: #fff !important;
            `}
            to="/impressum"
        >
            {chunks}
        </Text>
    );
    return (
        <div>
            <H2>{t('9. Changes to Privacy Policy')}</H2>
            <P>
                {t(`Maximilian Franz Peter Garmatschs privacy policy may change from time to time and all updates will be posted on this page ${(
                    <A>https://coderconsulting.de/impressum</A>
                )}. We reserve the right, at our sole discretion, to modify or replace this Privacy Policy at any time. If a revision is material we will try to provide at least days’ notice via email prior to any new privacy policies taking effect. What constitutes a material change will be determined at our sole discretion. Your continued use of the Service establishes your agreement to such changes to the Privacy Policy. Your only restoration, if you do not agree to the terms of this Privacy Policy, is to stop use of the Service.${(
                    <br />
                )}
If you have questions about our ${(
                    <span>Security Overview</span>
                )} or Privacy Policy, please contact us via email ${(
                    <span>mail@maximiliangarmatsch.com</span>
                )}`)}
            </P>
        </div>
    );
};

export default ChangesToPrivacyPolicy;
