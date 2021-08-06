import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
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

function TableContent(props) {
    const { data, page, rowsPerPage, setCouponUpdate, setOpen } = props;
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
                                    src={row.CouponImage}
                                    className={classes.image}
                                />
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="primary" variant="subtitle2">
                                {row.DateStart}
                            </Typography>
                        </TableCell>
                        <TableCell>{row.DateEnd}</TableCell>
                        <TableCell>
                            <Typography>{row.CouponNote}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                {Number(row.CouponCondition).toLocaleString(
                                    "it-IT",
                                    {
                                        style: "currency",
                                        currency: "VND",
                                    }
                                )}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                {Number(row.CouponPrice).toLocaleString(
                                    "it-IT",
                                    {
                                        style: "currency",
                                        currency: "VND",
                                    }
                                )}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                className={classes.status}
                                style={{
                                    backgroundColor:
                                        (row.Status === "Đang Chạy" &&
                                            "blue") ||
                                        (row.Status === "Hết Hạn" && "orange"),
                                }}
                            >
                                {row.Status}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                className={classes.status}
                                onClick={() => {
                                    setCouponUpdate(row);
                                    setOpen(true);
                                }}
                            >
                                Sửa
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
}

export default TableContent;
