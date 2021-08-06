import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    formControlError: {
        background: "red",
    },
    lineStoreName: {
        backgroundColor: "#CCCCCC",
    },
    lineStoreName1: {
        backgroundColor: "#EEEEEE",
    },
}));
export const SelectStore = (props) => {
    const { setIdType, idType, idTypeCheck, setIdTypeCheck } = props;
    const classes = useStyles();
    const type = useSelector((state) => state.product.types);
    const onChange = (event) => {
        const { value } = event.target;
        setIdType(value);
        setIdTypeCheck(false);
    };
    return (
        <>
            <FormControl
                className={
                    idTypeCheck ? classes.formControlError : classes.formControl
                }
                fullWidth
            >
                <InputLabel id="demo-simple-select-helper-label">
                    {idTypeCheck
                        ? "Loại sản phẩm không được để trống"
                        : "Loại sản phẩm"}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={idType}
                    onChange={onChange}
                >
                    {type &&
                        type.map((type, index) => (
                            <MenuItem
                                value={type?.TypeID}
                                key={type?.TypeID}
                                className={
                                    index % 2 === 0
                                        ? classes.lineStoreName
                                        : classes.lineStoreName1
                                }
                            >
                                {type?.TypeName}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </>
    );
};
export default SelectStore;
