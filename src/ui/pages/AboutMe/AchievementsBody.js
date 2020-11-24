import React from 'react';
import PortraitIcon from '@material-ui/icons/Portrait';
import BuildIcon from '@material-ui/icons/Build';
import { Link } from 'react-router-dom';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import { Box, Text } from '../../components/Base/Base';

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
                flexDirection="column"
                position="absolute"
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
                    />
                    <Box
                        display="flex"
                        flexDirection="column"
                        padding="0px 10px"
                    >
                        <Text color="#0DE99A">
                            {' '}
                            Maximilian Garmatsch 33, based in Berlin
                        </Text>
                        <Text fontSize="14px">Software Developer</Text>
                        <Text fontSize="14px">Engineering Manager</Text>
                    </Box>
                </Box>
                <Box width="100%" height="15%">
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
                        <PortraitIcon style={{ fontSize: '40px' }} />{' '}
                        <Text fontSize={{ lg: '25px' }} ml={{ lg: '10px' }}>
                            My CV{' '}
                        </Text>
                    </Link>
                </Box>
                <Box width="100%" height="15%">
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
                        <BuildIcon style={{ fontSize: '40px' }} />
                        <Text fontSize={{ lg: '25px' }} ml={{ lg: '10px' }}>
                            My PORTFOLIO
                        </Text>
                    </Link>
                </Box>
            </Box>
        </FormatValuesContext.Provider>
    );
}
