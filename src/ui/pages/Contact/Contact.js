import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { SizeContext } from '../../../context/SizeContext';
import DesktopStepsLayout from '../../components/Layouts/DesktopStepsLayout';
import MobileStepsLayout from '../../components/Layouts/MobileStepsLayout';
import ContactBody from './ContactBody';

const EMAILJS_userId = 'user_eBhucvRwzq5R3bUPaNqI7';
const EMAILJS_serviceId = 'service_cq190pr';
const EMAILJS_templateId = 'template_4mbrgz9';

export default function Contact() {
    emailjs.init(EMAILJS_userId);
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: t(`Let's get started.`),
        ButtonText: t('Submit'),
        type: 'submit',
    };
    const [fullname, setFullname] = useState('');
    const [companyposition, setCompanyPosition] = useState('');
    const [aboutproject, setAboutProject] = useState('');

    function onSubmit(e) {
        // e.preventDefault();
        // debugger;

        const payload = {
            fullname,
            companyposition,
            aboutproject,
        };

        emailjs
            .sendForm(
                EMAILJS_serviceId,
                EMAILJS_templateId,
                payload, // maybe e.target / payload
                EMAILJS_userId
            )
            .then(
                result => {
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
        return true;
    }

    // if (window.location.pathname == '/contact') {
    //     const submitBtn = document.querySelector('.submit-btn');
    // }

    return (
        <>
            {isDesktop ? (
                <DesktopStepsLayout onSubmit={onSubmit} {...layoutProperty}>
                    <ContactBody
                        setFullname={setFullname}
                        setCompanyPosition={setCompanyPosition}
                        setProjectIdea={setAboutProject}
                        onSubmit={onSubmit}
                    />
                </DesktopStepsLayout>
            ) : (
                <MobileStepsLayout {...layoutProperty}>
                    <ContactBody
                        setFullname={setFullname}
                        setCompanyPosition={setCompanyPosition}
                        setProjectIdea={setAboutProject}
                        onSubmit={onSubmit}
                    />
                </MobileStepsLayout>
            )}
        </>
    );
}
