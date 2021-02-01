import React from 'react';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { Link } from 'react-router-dom';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import { Box, Text } from '../../components/Base/Base';

// exported for testing purpose
export const formatValues = {
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
                flexDirection="column"
                width="100%"
                height="80%"
                left={{ _: '10px', lg: '0%' }}
                top={{ _: '15px', lg: '9%' }}
            >
                <Box
                    display="flex"
                    width="100%"
                    height="50%"
                    alignItems="flex-start"
                    justifyContent="space-between"
                >
                    <Box
                        as="img"
                        borderRadius="5px"
                        src="/assets/Max.jpg"
                        width="150px"
                        height="150px"
                        alt="Logo"
                        data-testid="max_image"
                        pt={8}
                    />
                    <Box
                        display="flex"
                        flexDirection="column"
                        padding="0px 10px"
                    >
                        <Text color="#0DE99A" style={{ fontSize: '16px' }}>
                            {' '}
                            Maximilian Garmatsch
                        </Text>
                        <Text color="#0DE99A" style={{ fontSize: '16px' }}>
                            {' '}
                            Based in Berlin, Germany
                        </Text>
                        <Text fontSize="14px">Software Developer</Text>
                        <Text fontSize="14px">Engineering Manager</Text>
                    </Box>
                </Box>
                <Box width="100%">
                    <Box>
                        <Text fontSize="13px">
                            "After a decade of professional business- and
                            consumer-software engineering, I see my next role in
                            training, mentoring and leading webdevelopment
                            teams, while facing advanced technical challenges in
                            an ever changing globalized environment"
                        </Text>
                    </Box>
                </Box>
                <Box pt={35}>
                    <Box width="100%">
                        <Link
                            to="/cv"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            }}
                            data-testid="cv-link"
                        >
                            <PictureAsPdfIcon
                                style={{ fontSize: '30px', color: '#0DE99A' }}
                            />
                            <Text fontSize={{ lg: '25px' }} ml={{ lg: '10px' }}>
                                Download My CV
                            </Text>
                        </Link>
                    </Box>
                    {/* <Box width="100%">
                        <Link
                            to="portfolio"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            }}
                            data-testid="portfolio-link"
                        >
                            <BuildIcon
                                style={{ fontSize: '20px', color: '#0DE99A' }}
                            />
                            <Text fontSize={{ lg: '15px' }} ml={{ lg: '10px' }}>
                                My PORTFOLIO
                            </Text>
                        </Link>
                    </Box> */}
                </Box>
            </Box>
        </FormatValuesContext.Provider>
    );
}
