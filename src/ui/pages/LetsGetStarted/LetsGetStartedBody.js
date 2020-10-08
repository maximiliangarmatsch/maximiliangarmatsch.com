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
                <Box>
                    <InputLabel style={{ color: '#0DE99A' }}>
                        Your Fullname
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{ width: '100%', color: 'white' }}
                    />
                </Box>

                <Box>
                    <InputLabel style={{ color: '#0DE99A' }}>
                        Your Company and Your Position
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{ width: '100%', color: 'white' }}
                    />
                </Box>

                <Box height="40%">
                    <InputLabel style={{ color: '#0DE99A' }}>
                        Tell me about your project
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{
                            width: '100%',
                            color: 'white',
                        }}
                    />
                </Box>
            </form>
        </Box>
    );
}
