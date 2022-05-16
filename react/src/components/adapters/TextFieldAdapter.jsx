import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const CustomTextField = ({
                             input,
                             meta,
                             readOnly,
                             disableUnderline,
                             onFilledChange,
                             disabled,
                             variant = 'outlined',
                             InputProps,
                             ...rest
                         }) => {
    const { data, touched, valid, active, error, submitError } = meta;
    const helperText = (active && data.warning) || (touched && error) || submitError;
    const isError = touched && !valid;

    return (
        <TextFieldAdapterStyle
            FormHelperTextProps={{
                classes: { error: 'error', root: 'root' },
            }}
            fullWidth
            helperText={helperText}
            error={isError}
            {...input}
            {...rest}
            InputLabelProps={{
                ...rest?.InputLabelProps,
                classes: { asterisk: 'asterisk' },
            }}
            InputProps={{
                readOnly,
                ...InputProps,
            }}
            disabled={disabled}
            variant={variant}
        />
    );
};

export default CustomTextField;

const TextFieldAdapterStyle = styled(TextField)`
  .Mui-error > :-webkit-autofill {
    -webkit-box-shadow: 0 0 10px rgba(223, 69, 69, 0.14) inset, 0 0 0 1000px rgba(242, 70, 70, 0.05) inset,
      0 0 0 1000px white inset !important;
    -webkit-text-fill-color: var(--pText) !important;
    :focus {
      -webkit-box-shadow: 0 0 10px rgba(69, 130, 223, 0.14) inset, 0 0 0 1000px #f4f9fd inset !important;
      -webkit-text-fill-color: var(--pText) !important;
    }
    :hover {
      -webkit-box-shadow: 0 0 10px rgba(69, 130, 223, 0.14) inset, 0 0 0 1000px #f4f9fd inset !important;
      -webkit-text-fill-color: var(--pText) !important;
    }
  }
  .error {
    margin-right: 0;
  }
`;
