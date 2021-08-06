import React from "react";
import TextField from "@material-ui/core/TextField";

const InputAddress = (props) => {
    const { Address, setAddress, AddressCheck, setAddressCheck } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setAddress(value);
        setAddressCheck(false);
    };
    return (
        <TextField
            error={AddressCheck}
            id="outlined-password-input"
            label={!AddressCheck ? "Địa chỉ" : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText=""
            value={Address}
            onChange={onChange}
        />
    );
};
export default InputAddress;
