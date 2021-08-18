import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
    const {
        value = null,
        setValue = null,
        isCheck = null,
        setIsCheck = null,
        placeholder = null,
        placeholderError = "Không Được bỏ trống",
        readOnly = false,
        desc = null,
        multiline = false,
    } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setValue(value);
        if (setIsCheck) setIsCheck(false);
    };
    return (
        <TextField
            error={isCheck}
            id="outlined-password-input"
            label={!isCheck ? placeholder : placeholderError}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText={desc}
            value={value}
            onChange={onChange}
            InputProps={{
                readOnly,
            }}
            multiline={multiline}
            rows={5}
        />
    );
};
export default Input;
