import * as Yup from 'yup';
import {
    RequiredValidation,
    EmailValidation,
} from '../../../helpers/ValidationSchemas';

const FormValidation: any = () => {
    return Yup.object().shape({
        fullname: RequiredValidation(),
        email: EmailValidation(true),
        aboutproject: RequiredValidation(),
    });
};

export default FormValidation;
