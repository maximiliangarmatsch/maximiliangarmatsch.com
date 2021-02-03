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

export function EndDateValidation(startDate) {
    const { t } = useTranslation();
    return Yup.date()
        .nullable()
        .transform(function(value) {
            return this.isType(value) && value !== null ? value : undefined;
        })
        .when(startDate, (startDate, schema) => {
            if (new Date(startDate) !== 'Invalid Date' && !isNaN(startDate)) {
                return schema.min(
                    startDate,
                    t('End date must be later than or equal to start date')
                );
            }
        });
}

export function PositiveIntegerValidation(minimum = false) {
    const { t } = useTranslation();
    if (minimum) {
        return Yup.number()
            .nullable()
            .transform(function(value) {
                return this.isType(value) && value !== null ? value : undefined;
            })
            .integer()
            .positive()
            .when(minimum, (minimumValue, schema) => {
                if (minimumValue !== undefined && !isNaN(minimumValue)) {
                    return schema.min(
                        minimumValue,
                        t('max number must be greater or equal to min number')
                    );
                } else {
                    return schema.min(1);
                }
            });
    } else {
        return Yup.number()
            .nullable()
            .transform(function(value) {
                return this.isType(value) && value !== null ? value : undefined;
            })
            .integer()
            .positive()
            .min(1);
    }
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

export function bulkValidation(label, size) {
    const res = {};
    for (let i = 1; i <= size; i++) {
        let index = i >= 10 || size < 10 ? i : `0${i}`;
        res[`${label}_${index}`] = RequiredValidation();
    }
    return res;
}
