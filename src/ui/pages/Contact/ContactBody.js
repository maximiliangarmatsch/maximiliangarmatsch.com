import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Box } from '../../components/Base/Base';

export default function ContactBody({ onSubmit }) {
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
                name="test"
                onSubmit={onSubmit}
            >
                <Box
                    height="12%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Your Fullname
                    </InputLabel>
                    <TextField
                        name="fullname"
                        variant="filled"
                        style={{ width: '100%', color: 'white !important' }}
                        inputProps={{ 'data-testid': 'contact-form-name' }}
                    />
                </Box>

                <Box
                    height="12%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Your Company and Your Position
                    </InputLabel>
                    <TextField
                        name="companyposition"
                        variant="filled"
                        style={{ width: '100%', color: 'white' }}
                        inputProps={{
                            'data-testid': 'contact-form-company',
                        }}
                    />
                </Box>
                <Box
                    height="12%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Email
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{ width: '100%', color: 'white' }}
                        inputProps={{
                            'data-testid': 'contact-form-email',
                        }}
                        name="email"
                    />
                </Box>
                <Box
                    height="12%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Phone Number
                    </InputLabel>
                    <TextField
                        variant="filled"
                        style={{ width: '100%', color: 'white' }}
                        inputProps={{
                            'data-testid': 'contact-form-phone',
                        }}
                        name="phone"
                    />
                </Box>

                <Box
                    height="30%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <InputLabel style={{ color: '#0DE99A', fontSize: '20px' }}>
                        Tell me about your project
                    </InputLabel>
                    <TextField
                        name="aboutproject"
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

                <Box
                    as="input"
                    type="submit"
                    value="Submit"
                    css={`
                        box-shadow: 0px 0px 6px #0cd58c;
                    `}
                    bg="green"
                    borderRadius="12px"
                    p="15px 80px"
                    border="1px solid rgba(27, 25, 25, 0.5)"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="deepBlack"
                    fontSize="18px"
                    fontWeight="500"
                    cursor="pointer"
                    mt="50px"
                    position="absolute"
                    bottom="10px"
                    left="55px"
                    width="80%"
                />
            </form>
        </Box>
    );
}