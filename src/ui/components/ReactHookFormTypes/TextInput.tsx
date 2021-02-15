import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import InfoIconButton from '../Base/InfoIconButton';

interface Props {
    type: any;
}
interface SectionCheckpointProps {
    hint?: any;
    error?: any;
    helperText?: any;
    defaultValue?: any;
    inputRef?: any;
    minLength?: any;
    maxLength?: any;
    min?: any;
    max?: any;
    email?: any;
    phone?: any;
    uri?: any;
    required?: any;
    pattern?: any;
    autoFocus?: any;
    name?: any;
    id?: any;
    rows?: any;
    multiline?: any;
    control?: any;
    inputProps?: any;
    props?: Props;
}

const TextInput: React.FC<SectionCheckpointProps> = ({
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
    autoFocus,
    name,
    rows,
    id,

    // error,
    // helperText,
    control,
    multiline,
    // defaultValue=""
    // inputProps,
    props,
}) => {
    let defaultType = 'text';
    if (email) {
        defaultType = 'email';
    } else if (phone) {
        defaultType = 'tel';
    } else if (uri) {
        defaultType = 'uri';
    }
    //  else if (props.type) {
    //     defaultType = props.type;
    // }
    return (
        <Controller
            as={TextField}
            variant="filled"
            fullWidth
            name={name}
            required={required}
            InputProps={{
                endAdornment: hint && <InfoIconButton html={hint} />,
            }}
            rows={rows}
            multiline={multiline}
            autoFocus={autoFocus}
            id={id}
            inputProps={{
                minLength: minLength > 0 ? minLength : undefined,
                maxLength: maxLength > 0 ? maxLength : undefined,
                min: min > 0 ? min : undefined,
                max: max > 0 ? max : undefined,
                pattern: pattern ? pattern : undefined,
            }}
            control={control}
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
