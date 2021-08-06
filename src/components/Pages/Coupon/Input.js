import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
    const { value, setValue, isCheck, setIsCheck, placeholder } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setValue(value);
        setIsCheck(false);
    };
    return (
        <TextField
            error={isCheck}
            id="outlined-password-input"
            label={!isCheck ? placeholder : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText=""
            value={value}
            onChange={onChange}
        />
    );
};
export default Input;
