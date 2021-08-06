import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { getStoreRequest } from "../../../../containers/Store/action";
import Loader from "../../../Loader/Loader";
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
    const { setIDStore, idStore, checkStore, setCheckStore } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const dataStore = useSelector((state) => state.store.data);
    const StoreSuccess = useSelector((state) => state.store.success);
    const onChange = (event) => {
        const { value } = event.target;
        setIDStore(value);
        setCheckStore(false);
    };
    React.useEffect(() => {
        dispatch(getStoreRequest());
    }, []);
    return (
        <>
            {StoreSuccess ? (
                <FormControl
                    className={
                        checkStore
                            ? classes.formControlError
                            : classes.formControl
                    }
                    fullWidth
                >
                    <InputLabel id="demo-simple-select-helper-label">
                        {checkStore
                            ? "Cửa hàng không được để trống"
                            : "Cửa hàng"}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={idStore}
                        onChange={onChange}
                    >
                        {dataStore &&
                            dataStore.map((store, index) => (
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
                            ))}
                    </Select>
                </FormControl>
            ) : (
                <Loader />
            )}
        </>
    );
};
export default SelectStore;
