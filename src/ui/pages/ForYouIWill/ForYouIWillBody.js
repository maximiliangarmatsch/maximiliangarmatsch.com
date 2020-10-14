import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../components/Base/Base';
import SectionCheckpoint from './components/SectionCheckpoint';

const messageValues = {
    First: chunks => (
        <Text color="green" fontSize="23px" lineHeight="18px" fontWeight="400">
            {chunks}
        </Text>
    ),
    Green: chunks => <Text color="green">{chunks}</Text>,
    linebreak: <br />,
    a: chunks => (
        <Text as="a" textDecoration="underline" href="#" color="green">
            {chunks}
        </Text>
    ),
};

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
                {t(
                    `${(
                        <messageValues.First>Understand</messageValues.First>
                    )} your needs ${(
                        <messageValues.Green>in days.</messageValues.Green>
                    )} My budget and time estimations will allow confident decision making.`
                )}
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                {t(`
                        ${(
                            <messageValues.First>Create</messageValues.First>
                        )} a prototype
                        ${(
                            <messageValues.Green>in weeks.</messageValues.Green>
                        )}
                        My first goal is a presentable foundation that we can build on. I’m an engineer first and an entrepreneur second.`)}
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                {t(`${(
                    <messageValues.First>Manage</messageValues.First>
                )} your project
                        ${(
                            <messageValues.Green>long-term</messageValues.Green>
                        )}.
                        You want to continously add components or scale your product?
                        I will lead the digital team that will do it.`)}
            </SectionCheckpoint>
        </Box>
    );
}
