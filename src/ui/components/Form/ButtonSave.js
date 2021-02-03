import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@material-ui/core/CircularProgress';
import { P } from '../Base/Text';

export default function ButtonSave({ loading, children, errors, ...props }) {
    const { t } = useTranslation();

    return (
        <>
            <Button
                fullWidth
                color={
                    errors?.['submitFormError']?.message
                        ? 'secondary'
                        : 'primary'
                }
                type="submit"
                disabled={loading}
                variant="outlined"
                startIcon={loading && <CircularProgress size={14} />}
                {...props}
            >
                {children || t('Save')}
            </Button>
            {errors?.['submitFormError']?.message && (
                <P style={{ color: 'red' }}>
                    {errors['submitFormError'].message}
                </P>
            )}
        </>
    );
}
