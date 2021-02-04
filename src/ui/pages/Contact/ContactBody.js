import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box } from '../../components/Base/Base';
import FormValidation from './FormValidation';
export default function ContactBody({
    EMAILJS_userId,
    EMAILJS_serviceId,
    EMAILJS_templateId,
    emailjs,
}) {
    //todo show a "success screen" if isSuccessful

    const history = useHistory();
    // const [isSuccessful, isSuccessfulSet] = useState(false);
    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(FormValidation()),
    });

    function onSubmit(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                EMAILJS_serviceId,
                EMAILJS_templateId,
                e.target,
                EMAILJS_userId
            )
            .then(
                result => {
                    console.log('sucsees');
                    history.push('/sucessScreen');
                    console.log(result.text);
                },
                error => {
                    console.warn(
                        '### FormHelpers:onSubmitError ERROR',
                        error,
                        e
                    );
                    console.log(error.text);
                }
            );
    }

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
                onSubmit={handleSubmit(onSubmit)}
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
                            inputRef={register({
                                required:
                                    'You must provide your name,Company name, your role!',
                            })}
                            required
                            error={!!errors.fullname}
                        />
                        {errors.fullname && <span>{errors.fullname}</span>}
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
                            // inputProps={
                            //     ({
                            //         'data-testid': 'contact-form-email',
                            //     },
                            //     { 'data-testid': 'contact-form-phone' })
                            // }
                            inputRef={register({
                                required: 'You must provide the email address!',
                                pattern: {
                                    // value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:
                                        'You must provide a valid email address!',
                                },
                            })}
                            required
                            error={!!errors.email}
                            name="email"
                        />
                        {errors.email && <span>{errors.email.message}</span>}
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
                            // inputProps={{
                            //     'data-testid': 'contact-form-about-project',
                            // }}
                            inputRef={register({
                                required: 'You must provide project info!',
                            })}
                            required
                            error={!!errors.aboutproject}
                        />
                        {errors.aboutproject && (
                            <span>{errors.aboutproject}</span>
                        )}
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
