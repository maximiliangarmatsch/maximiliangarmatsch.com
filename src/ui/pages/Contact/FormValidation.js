import * as Yup from 'yup';
import {
    RequiredValidation,
    EmailValidation,
} from '../../../helpers/ValidationSchemas';

export default function FormValidation() {
    return Yup.object().shape({
        fullname: RequiredValidation(),
        email: EmailValidation(true),
        aboutproject: RequiredValidation(),
    });
}
