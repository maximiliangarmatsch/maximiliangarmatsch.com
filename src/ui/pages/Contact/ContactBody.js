import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box } from '../../components/Base/Base';
import TextInput from '../../components/ReactHookFormTypes/TextInput';
import FormValidation from './FormValidation';

export default function ContactBody({ onSubmit }) {
    const { handleSubmit, errors, control } = useForm({
        resolver: yupResolver(FormValidation()),
    });

    const submit = (values, e) => {
        setTimeout(() => {
            onSubmit(e);
        }, 500);
    };

    const error = (error, e) => {
        console.warn('### FormHelpers:onSubmitError ERROR', error, e);
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
                onSubmit={handleSubmit(submit, error)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100%',
                }}
                name="test"
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
                        <TextInput
                            autoFocus
                            name="fullname"
                            id="textField"
                            error={!!errors.fullname}
                            helperText={
                                errors.fullname && errors['fullname'].message
                            }
                            control={control}
                            defaultValue=""
                            inputProps={
                                ({ 'data-testid': 'contact-form-name' },
                                { 'data-testid': 'contact-form-company' })
                            }
                        ></TextInput>
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
                        <TextInput
                            autoFocus
                            name="email"
                            id="textField"
                            error={!!errors.email}
                            helperText={errors.email && errors['email'].message}
                            control={control}
                            defaultValue=""
                            inputProps={
                                ({
                                    'data-testid': 'contact-form-email',
                                },
                                { 'data-testid': 'contact-form-phone' })
                            }
                        ></TextInput>
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
                        <TextInput
                            autoFocus
                            name="aboutproject"
                            id="textarea-form"
                            error={!!errors.aboutproject}
                            helperText={
                                errors.aboutproject &&
                                errors['aboutproject'].message
                            }
                            multiline
                            rows={4}
                            control={control}
                            defaultValue=""
                            inputProps={{
                                'data-testid': 'contact-form-about-project',
                            }}
                        ></TextInput>
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
