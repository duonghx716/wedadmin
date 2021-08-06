import React from "react";
import TextField from "@material-ui/core/TextField";

const InputCarNumber = (props) => {
    const { setCarNumber, carNumber, setCheckCarNumber, checkCarNumber } =
        props;
    const onChange = (event) => {
        const { value } = event.target;
        setCarNumber(value);
        setCheckCarNumber(false);
    };
    return (
        <TextField
            error={checkCarNumber}
            id="outlined-password-input"
            label={!checkCarNumber ? "Biển số xe" : "kiểm tra lại biển số xe"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText="Định dạng biển số xe : 47F1-99999,47F1-9999,47AB-1234"
            value={carNumber}
            onChange={onChange}
        />
    );
};
export default InputCarNumber;
