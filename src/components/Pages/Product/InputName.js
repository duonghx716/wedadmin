import React from "react";
import TextField from "@material-ui/core/TextField";

const InputImage = (props) => {
    const { Name, setName, NameCheck, setNameCheck } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setName(value);
        setNameCheck(false);
    };
    return (
        <TextField
            error={NameCheck}
            id="outlined-password-input"
            label={!NameCheck ? "Tên sản phẩm" : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText=""
            value={Name}
            onChange={onChange}
        />
    );
};
export default InputImage;
