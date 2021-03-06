import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    container: {
        width: "100px",
    },
    lineStoreName: {
        backgroundColor: "#CCCCCC",
    },
    lineStoreName1: {
        backgroundColor: "#EEEEEE",
    },
}));
export const SelectStore = (props) => {
    const { setValue, Value, dataSelect, title } = props;
    const classes = useStyles();
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
                        dataSelect.map((type, index) => (
                            <MenuItem
                                value={type.Year}
                                key={type.Year}
                                className={
                                    index % 2 === 0
                                        ? classes.lineStoreName
                                        : classes.lineStoreName1
                                }
                            >
                                {type.Year}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </>
    );
};
export default SelectStore;
