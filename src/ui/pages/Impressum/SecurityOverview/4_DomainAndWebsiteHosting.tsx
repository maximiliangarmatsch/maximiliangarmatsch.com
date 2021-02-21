import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../../components/Base/Text';
import { Text } from '../../../components/Base/Base';

const DomainAndWebsiteHosting: React.FC = () => {
    const { t } = useTranslation();
    const span = (chunks: any) => (
        <Text as="span" color="white">
            {chunks}
        </Text>
    );
    return (
        <div>
            <H2>{t('4. Domain & Website Hosting Services')}</H2>
            <P>
                {t(
                    `Our domain and web hosting service providers maintain the following protocols and certifications: SSL ${(
                        <span>Secure Sockets Layer</span>
                    )}, SPF ${(<span>Sender Policy Framework</span>)}, DMARC ${(
                        <span>
                            Domain-based Message Authentication, Reporting and
                            Conformance
                        </span>
                    )}, and DKIM ${(<span>DomainKeys Identified Mail</span>)}.`
                )}
            </P>
        </div>
    );
};

export default DomainAndWebsiteHosting;
