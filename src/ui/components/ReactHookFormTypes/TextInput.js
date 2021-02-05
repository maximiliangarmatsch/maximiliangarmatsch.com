import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import InfoIconButton from '../Base/InfoIconButton';

const TextInput = ({
    hint,
    error,
    helperText,
    defaultValue,
    inputRef,
    minLength,
    maxLength,
    min,
    max,
    email,
    phone,
    uri,
    required,
    pattern,
    ...props
}) => {
    let defaultType = 'text';
    if (email) {
        defaultType = 'email';
    } else if (phone) {
        defaultType = 'tel';
    } else if (uri) {
        defaultType = 'uri';
    } else if (props.type) {
        defaultType = props.type;
    }
    return (
        <Controller
            as={TextField}
            variant="filled"
            fullWidth
            required={required}
            InputProps={{
                endAdornment: hint && <InfoIconButton html={hint} />,
            }}
            inputProps={{
                minLength: minLength > 0 ? minLength : undefined,
                maxLength: maxLength > 0 ? maxLength : undefined,
                min: min > 0 ? min : undefined,
                max: max > 0 ? max : undefined,
                pattern: pattern ? pattern : undefined,
            }}
            type={defaultType}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue || ''}
            inputRef={inputRef}
            style={{
                width: '100%',
                backgroundColor: '#585858',
            }}
            {...props}
        />
    );
};

export default TextInput;
