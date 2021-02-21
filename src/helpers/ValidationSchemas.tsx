import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export function RequiredValidation() {
    const { t } = useTranslation();

    return Yup.string().required(t('Required'));
}

export function RequiredArrayValidation() {
    const { t } = useTranslation();

    return Yup.array().required(t('Required'));
}

export function NameValidation() {
    const { t } = useTranslation();
    const nameMinLength = 2;

    return Yup.string()
        .required(t('Required'))
        .min(
            nameMinLength,
            t('AtLeastXCharactersRequired', { X: nameMinLength })
        )
        .trim();
}

export function MnemonicValidation() {
    const { t } = useTranslation();
    const mnemonicMaxLength = 20;

    return Yup.string()
        .required(t('Required'))
        .max(
            mnemonicMaxLength,
            t('XCharactersAllowed', { X: mnemonicMaxLength })
        )
        .matches(/^[a-zA-Z0-9-_]+$/, {
            message: t('OnlyLettersAndNumbersAllowed'),
            excludeEmptyString: true,
        })
        .trim();
}

export function CheckboxGroupValidation() {
    const { t } = useTranslation();
    const mnemonicMaxLength = 20;

    return Yup.string()
        .required(t('Required'))
        .max(
            mnemonicMaxLength,
            t('XCharactersAllowed', { X: mnemonicMaxLength })
        )
        .matches(/^[a-zA-Z0-9]+$/, {
            message: t('OnlyLettersAndNumbersAllowed'),
            excludeEmptyString: true,
        })
        .trim();
}

export function StartDateValidation(isRequired = false) {
    if (isRequired)
        return Yup.date()
            .required()
            .transform(function(value) {
                return this.isType(value) && value !== null ? value : undefined;
            });
    return Yup.date()
        .nullable()
        .transform(function(value) {
            return this.isType(value) && value !== null ? value : undefined;
        });
}

export function NumberValidation() {
    const { t } = useTranslation();
    return Yup.string()
        .nullable()
        .matches(/^[0-9]+$/, {
            message: t('OnlyNumbersAllowed'),
            excludeEmptyString: true,
        });
    // .typeError('must be a number');
}

export function EmailValidation(isRequired = false) {
    const { t } = useTranslation();
    return isRequired
        ? Yup.string()
              .required()
              .email(`${t('Invalid email')}`)
        : Yup.string().email(`${t('Invalid email')}`);
}

export function PhoneNumberValidation(isRequired = false) {
    const { t } = useTranslation();
    const phoneMinLength = 6;

    if (isRequired)
        return Yup.string()
            .required(t('Required'))
            .min(
                phoneMinLength,
                t('AtLeastXCharactersRequired', { X: phoneMinLength })
            )
            .trim();
    else
        return Yup.string()
            .min(
                phoneMinLength,
                t('AtLeastXCharactersRequired', { X: phoneMinLength })
            )
            .trim();
}
