import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function InformationCollection() {
    const { t } = useTranslation();
    return (
        <div>
            <H2>
                {t(`1. Information Collection,${(<br />)} Use, and Sharing`)}
            </H2>
            <P>
                {t(`We may collect, store and use the following kinds of Personally Identifiable and Proprietary Information: ${(
                    <br />
                )}
(a) information in regard to any purchases and agreements you make of our Service through our website (including but not limited to your name, business name, address, email address, telephone number, API (application programming interface) keys, usernames and passwords, credit card details, database files, graphics, and proprietary business processes); ${(
                    <br />
                )}
(b) any other Personally Identifiable and Proprietary Information that you decide to give us transmitted via our website forms, email, telephone, or other direct contact from you.${(
                    <br />
                )}
We only have access to collect information and files that you voluntarily give us via our website forms, email, telephone, or other direct contact from you. We will not sell or rent this information to anyone.${(
                    <br />
                )}
We will use your information to respond to you, regarding the reason you contacted us and fulfill your Purchase to use the Service. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your Purchase e.g. to format your database files, to integrate your software or database with third party products and services to report on your data, to report on your database files, to provide professional email signature graphics, to store your data, to automate business process transactions and delete or tag record duplicates within your database; including but not limited to, related third party products and services.${(
                    <br />
                )}
When it is necessary to share your information, we partner with another party to provide the Service to fulfill your requests to use the Service. When you request the Service, we will share your Personally Identifiable and Proprietary Information that is necessary for the third party to provide the Service. These parties are not allowed to use your Personally Identifiable and Proprietary Information except for the purpose of providing the Service.${(
                    <br />
                )}`)}
            </P>
        </div>
    );
}
