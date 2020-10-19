import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Box } from '../../components/Base/Base';

export default function LetsGetStartedBody() {
    return (
        <Box
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
            <form
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Box
                    height="15%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Your Fullname
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{ width: '100%', color: 'white !important' }}
                        inputProps={{ 'data-testid': 'contact-form-name' }}
                    />
                </Box>

                <Box
                    height="15%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Your Company and Your Position
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{ width: '100%', color: 'white' }}
                        inputProps={{ 'data-testid': 'contact-form-company' }}
                    />
                </Box>

                <Box
                    height="40%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Tell me about your project
                    </InputLabel>
                    <TextField
                        id="textarea-form"
                        variant="filled"
                        style={{
                            width: '100%',
                            color: 'white',
                        }}
                        inputProps={{
                            'data-testid': 'contact-form-about-project',
                        }}
                    />
                </Box>
            </form>
        </Box>
    );
}
