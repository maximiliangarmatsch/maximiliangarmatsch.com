import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function LinksToOtherWebsites() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('9. Links To Other Websites')}</H2>
            <P>
                {t(
                    'Our Service may contain links to third ­party web sites or services that are not owned or controlled by Maximilian Franz Peter Garmatsch. Maximilian Franz Peter Garmatsch has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Maximilian Franz Peter Garmatsch shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, products or services available on or through any such web sites or services.'
                )}
            </P>
        </div>
    );
}
