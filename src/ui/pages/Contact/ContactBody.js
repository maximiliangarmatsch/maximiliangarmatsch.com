import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Box } from '../../components/Base/Base';

export default function ContactBody({
    handleSubmit,
    onSubmit,
    isSuccessful,
    setError,
}) {
    //todo show a "success screen" if isSuccessful
    const submit = e => {
        console.log('### ContactBody ', isSuccessful);
        e.preventDefault();
        e.stopPropagation();
        // isSubmittingSet(true);
        setTimeout(() => {
            onSubmit(onSubmitSuccess, onSubmitError, setError, e);
        }, 500);
    };

    const error = (error, e) => {
        console.warn('### FormHelpers:onSubmitError ERROR', error, e);
    };

    const onSubmitSuccess = () => {
        try {
            //isSubmittingSet(false);
        } catch (e) {}
    };

    const onSubmitError = error => {
        console.warn('### FormHelpers:onSubmitError ERROR', error);
        // isSubmittingSet(false);
        //DefaultCatch(error, setError, t);
    };

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
                // onSubmit={submit}
                onSubmit={() => handleSubmit(submit, error)}
            >
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Box pb={5}>
                        <InputLabel
                            style={{ color: '#0DE99A', fontSize: '20px' }}
                        >
                            Name, Company, your Role
                        </InputLabel>
                    </Box>
                    <Box pb={5}>
                        <TextField
                            name="fullname"
                            id="textField"
                            variant="filled"
                            style={{
                                width: '100%',
                                backgroundColor: '#585858',
                            }}
                            inputProps={
                                ({ 'data-testid': 'contact-form-name' },
                                { 'data-testid': 'contact-form-company' })
                            }
                        />
                    </Box>
                </Box>
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Box pb={5}>
                        <InputLabel
                            style={{ color: '#0DE99A', fontSize: '20px' }}
                        >
                            Email or Phone number
                        </InputLabel>
                    </Box>
                    <Box pb={5}>
                        <TextField
                            variant="filled"
                            id="textField"
                            style={{
                                width: '100%',
                                color: 'white',
                                backgroundColor: '	#585858',
                            }}
                            inputProps={
                                ({
                                    'data-testid': 'contact-form-email',
                                },
                                { 'data-testid': 'contact-form-phone' })
                            }
                            name="email"
                        />
                    </Box>
                </Box>
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Box pb={5}>
                        <InputLabel
                            style={{ color: '#0DE99A', fontSize: '20px' }}
                        >
                            Tell me about your project
                        </InputLabel>
                    </Box>
                    <Box>
                        <TextField
                            name="aboutproject"
                            id="textarea-form"
                            variant="filled"
                            multiline
                            rows={4}
                            style={{
                                width: '100%',
                                color: 'white',
                                backgroundColor: '	#585858',
                            }}
                            inputProps={{
                                'data-testid': 'contact-form-about-project',
                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box
                        as="input"
                        type="submit"
                        value="Submit"
                        css={`
                            box-shadow: 0px 0px 6px #0cd58c;
                            color: #585858;
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
                        position="absolute"
                        width="calc(100% - 95px)"
                        m={{ _: '0 20px', lg: '0' }}
                        height="50px"
                        bottom={{ _: '50px', lg: '50px' }}
                        className="submit-btn"
                    />
                </Box>
            </form>
        </Box>
    );
}
