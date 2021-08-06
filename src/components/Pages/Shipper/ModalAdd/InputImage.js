import React from "react";
import TextField from "@material-ui/core/TextField";

const InputImage = (props) => {
    const { image, setImage, checkImage, setCheckImage } = props;
    const onChange = (e) => {
        setImage(e.target.value);
        setCheckImage(false);
    };
    return (
        <TextField
            autoFocus
            id="outlined-password-input"
            margin="normal"
            label="Hình ảnh"
            type="string"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
            error={checkImage}
            helperText="Không được bỏ trống"
            value={image}
            onChange={onChange}
        />
    );
};
export default InputImage;
