import React from "react";
import TextField from "@material-ui/core/TextField";

const InputImage = (props) => {
    const { image, setImage, imageCheck, setImageCheck } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setImage(value);
        setImageCheck(false);
    };
    return (
        <TextField
            error={imageCheck}
            id="outlined-password-input"
            label={!imageCheck ? "Hình ảnh" : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText="hình ảnh là link url vd: https://knowlab.inpaper-1920x1200-1920x1080.jpg"
            value={image}
            onChange={onChange}
        />
    );
};
export default InputImage;
