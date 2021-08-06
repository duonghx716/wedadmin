import React from "react";
import TextField from "@material-ui/core/TextField";

const InputPhone = (props) => {
    const { Phone, setPhone, PhoneCheck, setPhoneCheck } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setPhone(value);
        setPhoneCheck(false);
    };
    return (
        <TextField
            error={PhoneCheck}
            id="outlined-password-input"
            label={!PhoneCheck ? "số điện thoại" : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText=""
            value={Phone}
            onChange={onChange}
        />
    );
};
export default InputPhone;
