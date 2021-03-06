import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
    const {
        value,
        setValue,
        isCheck,
        setIsCheck,
        placeholder,
        placeholderError = "Không Được bỏ trống",
        desc,
    } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setValue(value);
        setIsCheck(false);
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
        />
    );
};
export default Input;
