import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeContext } from '../../../context/SizeContext';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import LetsGetStartedBody from './LetsGetStartedBody';
import emailjs from 'emailjs-com';

export default function LetsGetStarted() {
    emailjs.init('user_wFM4BRSbqWS35PxOiUTq7');
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const templateProperty = {
        title: t(`Let's get started.`),
        ButtonText: t('Submit'),
        type: 'submit',
    };
    const [fullname, setFullname] = useState('');
    const [companyposition, setCompanyPosition] = useState('');
    const [aboutproject, setAboutProject] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const payload = {
            fullname,
            companyposition,
            aboutproject,
        };
        emailjs
            .sendForm(
                'service_7p4zwu2',
                '',
                payload,
                'user_wFM4BRSbqWS35PxOiUTq7'
            )
            .then(
                result => {
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    }

    // if (window.location.pathname == '/contactform') {
    //     const submitBtn = document.querySelector('.submit-btn');
    // }

    return (
        <>
            {isDesktop ? (
                <DesktopStepsTemplate onSubmit={onSubmit} {...templateProperty}>
                    <LetsGetStartedBody
                        setFullname={setFullname}
                        setCompanyPosition={setCompanyPosition}
                        setProjectIdea={setAboutProject}
                        onSubmit={onSubmit}
                    />
                </DesktopStepsTemplate>
            ) : (
                <MobileStepsTemplate {...templateProperty}>
                    <LetsGetStartedBody
                        setFullname={setFullname}
                        setCompanyPosition={setCompanyPosition}
                        setProjectIdea={setAboutProject}
                        onSubmit={onSubmit}
                    />
                </MobileStepsTemplate>
            )}
        </>
    );
}
