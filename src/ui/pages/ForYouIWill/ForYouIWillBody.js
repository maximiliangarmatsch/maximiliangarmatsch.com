import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '../../components/Base/Base';
import SectionCheckpoint from './components/SectionCheckpoint';

const messageValues = {
    first: chunks => (
        <Text color="green" fontSize="23px" lineHeight="18px" fontWeight="400">
            {chunks}
        </Text>
    ),
    green: chunks => <Text color="green">{chunks}</Text>,
    linebreak: <br />,
    a: chunks => (
        <Text as="a" textDecoration="underline" href="#" color="green">
            {chunks}
        </Text>
    ),
};
export default function ForYouIWillBody() {
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
                <FormattedMessage
                    defaultMessage="
                        <first>Understand</first> your needs
                        <green>in days.</green>
                        My budget- and time-estimations will allow smart planning and decision making!"
                    values={messageValues}
                />
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                <FormattedMessage
                    defaultMessage="
                        <first>Create</first> a foundation
                        <green>in weeks.</green>
                        I write all initial code myself and guarantee a clean software architecture that we can build on!
                        {linebreak}
                        "
                    values={messageValues}
                />
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                <FormattedMessage
                    defaultMessage="
                        <first>Manage</first> your project
                        <green>long-term</green>.
                        You want to continuously add components and scale your product?
                        I will hire, train and lead the digital team that will do it!"
                    values={messageValues}
                />
            </SectionCheckpoint>
        </Box>
    );
}
