import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Text } from '../../components/Base/Base';
import { H1, P } from '../../components/Base/Text';
import PaymentInformation from './SecurityOverview/1_PaymentInformation';
import NetworkAccess from './SecurityOverview/2_NetworkAccess';
import UserAccountAccess from './SecurityOverview/3_UserAccountAccess';
import DomainAndWebsiteHosting from './SecurityOverview/4_DomainAndWebsiteHosting';
import CommunicationAndFileTransmission from './SecurityOverview/5_CommunicationAndFileTransmission';
import AcceptanceOfTOS from './TermsOfService/1_AcceptanceOfTOS';
import DescriptionOfService from './TermsOfService/2_DescriptionOfService';
import Purchases from './TermsOfService/3_Purchases';
import Subscriptions from './TermsOfService/4_Subscriptions';
import Delivery from './TermsOfService/5_Delivery';
import Rescheduling from './TermsOfService/6_Rescheduling';
import CancellationsAndRefunds from './TermsOfService/7_Cancellations&Refunds';
import DisclainerOfWarranties from './TermsOfService/8_DisclainerOfWarranties';
import LinksToOtherWebsites from './TermsOfService/9_LinksToOtherWebsites';
import Idemnity from './TermsOfService/10_Idemnity';
import LimitationOfLiability from './TermsOfService/11_LimitationOfLiability';
import ChangesToTOS from './TermsOfService/12_ChangesToTOS';
import Jurisdiction from './TermsOfService/13_Jurisdiction';
import InformationCollection from './PrivacyPolicy/1_InformationCollection';
import Children from './PrivacyPolicy/2_Children';
import CommunicationWithYou from './PrivacyPolicy/3_CommunicationWithYou';
import AccessAndControl from './PrivacyPolicy/4_AccessAndControl';
import SecurityAndInformation from './PrivacyPolicy/5_SecurityAndInformation';
import DataRetention from './PrivacyPolicy/6_DataRetention';
import TermsOfService from './PrivacyPolicy/8_TermsOfService';
import ChangesToPrivacyPolicy from './PrivacyPolicy/9_ChangesOfPrivacyPolicy';

export default function Impressum() {
    const { t } = useTranslation();

    return (
        <Box lineHeight="1.3rem" mt="2rem" p="0 15px">
            <Text
                fontSize={{ xxl: '18px' }}
                color="white"
                marginBottom="1.5rem"
            >
                {t('Maximilian Garmatsch')}
                <br />
                {t('Bornheimer Landstrasse 37')}
                <br />
                {t('60316 Frankfurt am Main"')}
                <br />
                {t('mail@maximiliangarmatsch.com')}
                <br />
            </Text>

            <div>
                <H1>{t('Terms of Service')}</H1>
                <AcceptanceOfTOS />
                <DescriptionOfService />
                <Purchases />
                <Subscriptions />
                <Delivery />
                <Rescheduling />
                <CancellationsAndRefunds />
                <DisclainerOfWarranties />
                <LinksToOtherWebsites />
                <Idemnity />
                <LimitationOfLiability />
                <ChangesToTOS />
                <Jurisdiction />
            </div>
            <div>
                <H1>{t('Privacy Policy')}</H1>
                <P>
                    {t(`This privacy policy discloses the privacy practices for ${(
                        <A>https://maximiliangarmatsch.com</A>
                    )}  owned and operated by Maximilian Franz Peter Garmatsch. This privacy policy applies solely to information collected by ${(
                        <A>https://maximiliangarmatsch.com</A>
                    )}. It will notify you of the following:${(<br />)}
                                    What Personally Identifiable and Proprietary Information is collected from you through the web site, how it is used and with whom it may be shared. What choices are available to you regarding the use of your data. The security procedures in place to protect the misuse of your information.How you can correct any inaccuracies in the information.`)}
                </P>
                <InformationCollection />
                <Children />
                <CommunicationWithYou />
                <AccessAndControl />
                <SecurityAndInformation />
                <DataRetention />
                <LinksToOtherWebsites />
                <TermsOfService />
                <ChangesToPrivacyPolicy />
            </div>
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
        </Box>
    );
}

const A = chunks => (
    <Text
        as={Link}
        color="white"
        css={`
            text-decoration: none;
            color: #fff !important;
        `}
        to="/"
    >
        {chunks}
    </Text>
);
