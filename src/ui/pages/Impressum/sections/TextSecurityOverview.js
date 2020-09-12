import React from 'react';
import { useTranslation } from 'react-i18next';
import { H1, P } from '../components/Base';
import PaymentInformation from './SecurityOverview/1_PaymentInformation';
import NetworkAccess from './SecurityOverview/2_NetworkAccess';
import UserAccountAccess from './SecurityOverview/3_UserAccountAccess';
import DomainAndWebsiteHosting from './SecurityOverview/4_DomainAndWebsiteHosting';
import CommunicationAndFileTransmission from './SecurityOverview/5_CommunicationAndFileTransmission';

export default function TextSecurityOverview() {
    const { t } = useTranslation();

    return (
        <div>
            <H1>{t('Security Overview')}</H1>
            <P>
                {t(
                    'Maximilian Franz Peter Garmatsch is Senior software engineer and consultant. We take reasonable precautions to keep your data safe, and are proud to partner with service providers who maintain the latest cybersecurity best practices.'
                )}
            </P>
            <PaymentInformation />
            <NetworkAccess />
            <UserAccountAccess />
            <DomainAndWebsiteHosting />
            <CommunicationAndFileTransmission />
        </div>
    );
}
