import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import ButtonSave from './/ButtonSave';
// import { DefaultCatch } from '../Base/Form';

export default function Form({
    onSubmit,
    loading,
    disabled,
    children,
    onCancel,
    handleSubmit,
    onBlur,
    defaultValues,
    reset,
    setError,
    errors,
    labelSubmit,
    labelCancel,
    hideCancelButton = false,
    hideSubmitButton = false,
    ...rest
}) {
    const { t } = useTranslation();
    const [isSubmitting, isSubmittingSet] = useState(false);

    const submit = (values, e) => {
        e.preventDefault();
        e.stopPropagation();
        isSubmittingSet(true);
        setTimeout(() => {
            onSubmit(values, onSubmitSuccess, onSubmitError, setError);
        }, 500);
    };

    const error = (error, e) => {
        console.warn('### FormHelpers:onSubmitError ERROR', error, e);
    };

    const cancel = e => {
        reset(defaultValues);
        if (onCancel) onCancel(e);
    };

    const onSubmitSuccess = () => {
        try {
            isSubmittingSet(false);
        } catch (e) {}
    };

    const onSubmitError = error => {
        isSubmittingSet(false);
        //DefaultCatch(error, setError, t);
    };

    return (
        <form
            onSubmit={handleSubmit(submit, error)}
            disabled={disabled || loading}
            aria-busy={loading}
            noValidate
            onBlur={onBlur}
            {...rest}
        >
            <Grid container alignItems="flex-start" spacing={2}>
                {children}
                {!hideCancelButton && (
                    <Grid item xs={12} md={6}>
                        <Button
                            fullWidth
                            color="secondary"
                            disabled={loading}
                            variant="outlined"
                            onClick={cancel}
                        >
                            {labelCancel ? labelCancel : t('Cancel')}
                        </Button>
                    </Grid>
                )}
                {!hideSubmitButton && (
                    <Grid item xs={12} md={6}>
                        <ButtonSave
                            loading={loading || isSubmitting}
                            errors={errors}
                        >
                            {labelSubmit ? labelSubmit : t('Save')}
                        </ButtonSave>
                    </Grid>
                )}
            </Grid>
        </form>
    );
}
