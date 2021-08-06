import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    name: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark,
    },
    status: {
        fontWeight: "bold",
        fontSize: "0.75rem",
        color: "white",
        backgroundColor: "green",
        borderRadius: 8,
        padding: "3px 10px",
        display: "inline-block",
    },
    image: {
        width: "50px",
        height: "50px",
    },
}));

export const BodyTable = ({
    page,
    rowsPerPage,
    data,
    setShipperUpdate,
    setOpen,
}) => {
    const classes = useStyles();
    const dataStore = useSelector((state) => state.store.data);
    const StoreSuccess = useSelector((state) => state.store.success);
    const nameStore = (id) => {
        const data = dataStore && dataStore.find((item) => item.StoreID === id);
        return data?.StoreName;
    };

    return (
        <TableBody>
            {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow key={row.ShipID}>
                        <TableCell>
                            <Typography>
                                <img
                                    src={row.ShipImage}
                                    className={classes.image}
                                />
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="primary" variant="subtitle2">
                                {row.ShipName}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>0{row.ShipPhone}</Typography>
                        </TableCell>
                        <TableCell>{row.ShipNumberCar}</TableCell>
                        <TableCell>
                            <Typography>{row.Status}</Typography>
                        </TableCell>
                        {StoreSuccess && (
                            <TableCell>
                                <Typography>
                                    {nameStore(row.StoreID)}
                                </Typography>
                            </TableCell>
                        )}
                        <TableCell>
                            <Button
                                variant="contained"
                                className={classes.status}
                                onClick={() => {
                                    setShipperUpdate(row);
                                    setOpen(true);
                                }}
                            >
                                Sửa
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
};

export default BodyTable;
