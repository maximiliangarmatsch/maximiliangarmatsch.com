import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import { SizeContext } from '../../../context/SizeContext';
import LayoutStepsDesktop from '../../components/Layouts/LayoutStepsDesktop';
import LayoutStepsMobile from '../../components/Layouts/LayoutStepsMobile';
import DeviceProvider from '../../../helpers/DeviceProvider';
import ContactBody from './ContactBody';

const EMAILJS_userId = 'user_1DliHqPRQsPkdIOAmHY2Q';
const EMAILJS_serviceId = 'service_cq190pr';
const EMAILJS_templateId = 'template_4mbrgz9';

emailjs.init(EMAILJS_userId);

export default function Contact() {
    const { t } = useTranslation();
    const history = useHistory();
    const [isSuccessful, isSuccessfulSet] = useState(false);
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
                    isSuccessfulSet(true);
                    history.push('/sucessScreen');
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    }

    return (
        <DeviceProvider>
            {isDesktop ? (
                <LayoutStepsDesktop {...layoutProperty}>
                    <ContactBody
                        onSubmit={onSubmit}
                        isSuccessful={isSuccessful}
                    />
                </LayoutStepsDesktop>
            ) : (
                <LayoutStepsMobile {...layoutProperty}>
                    <ContactBody
                        onSubmit={onSubmit}
                        isSuccessful={isSuccessful}
                    />
                </LayoutStepsMobile>
            )}
        </DeviceProvider>
    );
}
