import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { SizeContext } from '../../../context/SizeContext';
import DesktopStepsLayout from '../../components/Layouts/DesktopStepsLayout';
import MobileStepsLayout from '../../components/Layouts/MobileStepsLayout';
import ContactBody from './ContactBody';

const EMAILJS_userId = 'user_eBhucvRwzq5R3bUPaNqI7';
const EMAILJS_serviceId = 'service_cq190pr';
const EMAILJS_templateId = 'template_4mbrgz9';

emailjs.init(EMAILJS_userId);

export default function Contact() {
    const { t } = useTranslation();
    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: t(`Let's get started.`),
        ButtonText: t('Submit'),
        type: 'submit',
    };

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
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    }

    return (
        <>
            {isDesktop ? (
                <DesktopStepsLayout {...layoutProperty}>
                    <ContactBody onSubmit={onSubmit} />
                </DesktopStepsLayout>
            ) : (
                <MobileStepsLayout {...layoutProperty}>
                    <ContactBody onSubmit={onSubmit} />
                </MobileStepsLayout>
            )}
        </>
    );
}
