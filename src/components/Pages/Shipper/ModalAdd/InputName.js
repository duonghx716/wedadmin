import React from "react";
import TextField from "@material-ui/core/TextField";

const InputName = (props) => {
    const { name, setName, checkName, setCheckName } = props;
    const onChange = (e) => {
        setName(e.target.value);
        setCheckName(false);
    };
    return (
        <TextField
            id="outlined-password-input"
            margin="normal"
            label="Tên"
            type="string"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
            error={checkName}
            helperText="Không được bỏ trống"
            value={name}
            onChange={onChange}
        />
    );
};
export default InputName;
