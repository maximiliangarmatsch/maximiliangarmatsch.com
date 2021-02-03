import * as Yup from 'yup';
import { RequiredValidation } from '../../../helpers/ValidationSchemas';

export default function FormValidation() {
    return Yup.object().shape({
        fk_event: RequiredValidation(),
        fk_abstract_submission_system: RequiredValidation(),
        fk_status: RequiredValidation(),
        abstract__title: RequiredValidation(),
        abstract__body: RequiredValidation(),
    });
}
