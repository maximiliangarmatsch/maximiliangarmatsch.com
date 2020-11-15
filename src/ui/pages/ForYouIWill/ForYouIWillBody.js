import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../../components/Base/Base';
import SectionCheckpoint from './components/SectionCheckpoint';

export default function ForYouIWillBody() {
    const { t } = useTranslation();
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            maxHeight={{ _: 'calc(100% - 210px)', md: 'auto' }}
            height="100%"
            p="10px"
            pt="0"
            css={`
                @media screen and (max-width: 375px) {
                    overflow: scroll;
                }
            `}
        >
            <SectionCheckpoint dataTestId="section-checkpoint">
                <span
                    style={{
                        color: '#0de99a',
                    }}
                >
                    {t('Understand')}&nbsp;
                </span>
                {t(
                    'Understand your needs in days. My budget- and time-estimations will allow smart planning and decision making!'
                )}
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                <span
                    style={{
                        color: '#0de99a',
                    }}
                >
                    {t('Create')}&nbsp;
                </span>
                {t(
                    'a prototype in weeks. I write all initial code myself and guarantee a clean software architecture that we can build on!'
                )}
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                <span
                    style={{
                        color: '#0de99a',
                    }}
                >
                    {t('Manage')}&nbsp;
                </span>
                {t(
                    'your project long-term. You want to continuously add components and scale your product? I will hire, train and lead the digital team that will do it!'
                )}
            </SectionCheckpoint>
        </Box>
    );
}
