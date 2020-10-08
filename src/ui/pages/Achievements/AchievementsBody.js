import React from 'react';
import { Box, Text } from '../../components/Base/Base';
import { FormatValuesContext } from '../../../context/FormatValuesContext';

const formatValues = {
    header: chunks => (
        <Text
            fontSize={{ _: '20px', sm: '20px', md: '26px' }}
            fontWeight="bold"
            lineHeight={{ _: '18px', sm: '18px', md: '26px' }}
        >
            {chunks} <br />
        </Text>
    ),
    subheader: chunks => (
        <Text
            fontSize={{ _: '14px', sm: '16px', md: '18px' }}
            fontWeight="bold"
            lineHeight={{ _: '16px', sm: '16px', md: '24px' }}
        >
            {chunks} <br />
        </Text>
    ),
    rest: chunks => (
        <Text fontSize={{ _: '8px', sm: '10px', md: '12px' }} fontWeight="300">
            {chunks} <br />
        </Text>
    ),
};

export default function AchievementsBody() {
    return (
        <FormatValuesContext.Provider value={formatValues}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                position="absolute"
                width="100%"
                left={{ _: '10px', lg: '0%' }}
                top={{ _: '15px', lg: '9%' }}
            >
                <Box
                    as="img"
                    borderRadius="5px"
                    src="/assets/Max.jpg"
                    width="150px"
                    height="150px"
                    alt="Logo"
                />
                <Box display="flex" flexDirection="column" padding="10px">
                    <Text color="#0DE99A">
                        Maximilian Garmatsch 33, based in Berlin
                    </Text>
                    <Text fontSize="14px">Freelance IT Consultant</Text>
                    <Text fontSize="14px">Software Developer</Text>
                    <Text fontSize="14px">Engineering Manager</Text>
                    <Text fontSize="14px">Bachelor of Science</Text>
                </Box>
            </Box>
        </FormatValuesContext.Provider>
    );
}
