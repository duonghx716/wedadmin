import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
const useStyles = makeStyles(() => ({
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
        width: "50",
        height: "50px",
    },
    note: {
        width: "50%",
    },
    price: {
        width: "10%",
    },
}));

function TableContent(props) {
    const classes = useStyles();
    const { data, page, rowsPerPage, handleChange } = props;

    const handleChangeCheckBox = (event, id) => {
        const { checked } = event.target;
        handleChange(checked, id);
    };
    return (
        <TableBody>
            {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow key={row.ProductID}>
                        <TableCell>
                            <Checkbox
                                checked={row.status}
                                onChange={(event) =>
                                    handleChangeCheckBox(event, row.UserID)
                                }
                                inputProps={{
                                    "aria-label": "primary checkbox",
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <Typography>
                                <img
                                    src={row.UserImage}
                                    className={classes.image}
                                />
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="primary" variant="subtitle2">
                                {row.UserName}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.price}>
                                {`0${row.UserPhone}`}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.price}>
                                {row.UserBirthday || "Chưa cập nhật"}
                            </Typography>
                        </TableCell>
                        <TableCell className={classes.price}>
                            <Typography>
                                {row.UserMail || "Chưa cập nhật"}
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
}

export default TableContent;
