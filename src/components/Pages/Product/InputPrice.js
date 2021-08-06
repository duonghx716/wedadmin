import React from "react";
import TextField from "@material-ui/core/TextField";

const InputPrice = (props) => {
    const { Price, setPrice, PriceCheck, setPriceCheck } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setPrice(value);
        setPriceCheck(false);
    };
    return (
        <TextField
            error={PriceCheck}
            id="outlined-password-input"
            label={!PriceCheck ? "Giá" : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText=""
            value={Price}
            onChange={onChange}
        />
    );
};
export default InputPrice;
