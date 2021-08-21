import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "300px",
    },
    container: {
        width: "300px",
        marginRight: "50px",
    },
    lineStoreName: {
        backgroundColor: "#CCCCCC",
    },
    lineStoreName1: {
        backgroundColor: "#EEEEEE",
    },
}));
const SelectStore = (props) => {
    const classes = useStyles();
    const { setValue, Value, dataSelect, title } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setValue(value);
    };
    return (
        <>
            <FormControl className={classes.container}>
                <InputLabel id="demo-simple-select-helper-label">
                    {title}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={Value}
                    onChange={onChange}
                >
                    {dataSelect &&
                        dataSelect.map((store, index) => {
                            return (
                                <MenuItem
                                    value={store?.StoreID}
                                    key={store?.StoreID}
                                    className={
                                        index % 2 === 0
                                            ? classes.lineStoreName
                                            : classes.lineStoreName1
                                    }
                                >
                                    {store?.StoreName}
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>
        </>
    );
};
export default SelectStore;
