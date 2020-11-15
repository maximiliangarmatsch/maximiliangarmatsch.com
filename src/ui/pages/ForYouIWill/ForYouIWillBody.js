import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../../components/Base/Base';
import SectionCheckpoint from './components/SectionCheckpoint';

// const messageValues = {
//     First: chunks => (
//         <Text color="green" fontSize="23px" lineHeight="18px" fontWeight="400">
//             {chunks}
//         </Text>
//     ),
//     Green: chunks => <Text color="green">{chunks}</Text>,
//     linebreak: <br />,
//     a: chunks => (
//         <Text as="a" textDecoration="underline" href="#" color="green">
//             {chunks}
//         </Text>
//     ),
// };

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
                    `
                        Understand
                    your needs 
                        in days.
                 My budget- and time-estimations will allow smart planning and decision making!`
                )}
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                {t(`
                        
                            Create
                         a prototype
                        
                            in weeks.
                    
                        I write all initial code myself and guarantee a clean software architecture that we can build on!`)}
            </SectionCheckpoint>
            <SectionCheckpoint dataTestId="section-checkpoint">
                {t(`
                    Manage
            your project
                        
                            long-term
                        .
                        You want to continuously add components and scale your product?
                        I will hire, train and lead the digital team that will do it!`)}
            </SectionCheckpoint>
        </Box>
    );
}
