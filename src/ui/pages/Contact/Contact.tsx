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

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const [showFormBtn] = useState(false);

    const isDesktop = useContext(SizeContext);
    const layoutProperty = {
        title: t(`Let's get started.`),
        ButtonText: t('Submit'),
        type: 'submit',
    };

    function onSubmit(e: any) {
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
                    history.push('/sucessScreen');
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    }

    return (
        <DeviceProvider showFormBtn={showFormBtn}>
            {isDesktop ? (
                <LayoutStepsDesktop {...layoutProperty}>
                    <ContactBody onSubmit={onSubmit} />
                </LayoutStepsDesktop>
            ) : (
                <LayoutStepsMobile {...layoutProperty}>
                    <ContactBody onSubmit={onSubmit} />
                </LayoutStepsMobile>
            )}
        </DeviceProvider>
    );
};

export default Contact;
