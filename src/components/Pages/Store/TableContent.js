import {
    TableBody,
    TableCell,
    TableRow,
    Typography,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
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

function MTable(props) {
    const { data, page, rowsPerPage, setStoreUpdate, setOpen } = props;
    const classes = useStyles();
    return (
        <TableBody>
            {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow key={row.StoreID}>
                        <TableCell>
                            <Typography>
                                <img
                                    src={row.StoreImage}
                                    className={classes.image}
                                />
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="primary" variant="subtitle2">
                                {row.StoreName}
                            </Typography>
                        </TableCell>
                        <TableCell>{row.StoreAddress}</TableCell>
                        <TableCell>
                            <Typography>{row.StorePhone}</Typography>
                        </TableCell>
                        <TableCell>
                            <Button
                                className={classes.status}
                                onClick={() => {
                                    setStoreUpdate(row);
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
}

export default MTable;
