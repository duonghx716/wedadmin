import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const InputNumberPhone = (props) => {
    const {
        checkPhoneNumber,
        phoneNumber,
        setPhoneNumber,
        setCheckPhoneNumber,
    } = props;

    const onChangeNumberPhone = (event) => {
        const { value } = event.target;
        setPhoneNumber(value);
        setCheckPhoneNumber(false);
    };
    return (
        <TextField
            error={checkPhoneNumber}
            id="outlined-password-input"
            label={
                checkPhoneNumber
                    ? "Kiểm tra lại số điện thoại của bạn"
                    : "Số điện thoại"
            }
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText="Số điện thoại gồm 9 hoặc 10 số , bắt đầu bằng 03,05,07,08,09 ."
            value={phoneNumber}
            onChange={onChangeNumberPhone}
        />
    );
};
export default InputNumberPhone;
