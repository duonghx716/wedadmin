import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypeRequest } from "../../../containers/Product/action";
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
    const { dataProduct, page, rowsPerPage, setProductUpdate, setOpen } = props;
    const dispatch = useDispatch();
    const type = useSelector((state) => state.product.types);
    console.log({ type });
    const TypeLine = (id) => {
        const data = type && type.find((item) => item.TypeID === id + "");
        return data?.TypeName;
    };
    useEffect(() => {
        dispatch(getTypeRequest());
    }, []);
    return (
        <TableBody>
            {dataProduct
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow key={row.ProductID}>
                        <TableCell>
                            <Typography>
                                <img
                                    src={row.ProductImage}
                                    className={classes.image}
                                />
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="primary" variant="subtitle2">
                                {row.ProductName}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.price}>
                                {Number(row.ProductPrice).toLocaleString(
                                    "it-IT",
                                    {
                                        style: "currency",
                                        currency: "VND",
                                    }
                                )}
                            </Typography>
                        </TableCell>
                        <TableCell className={classes.price}>
                            <Typography>{TypeLine(row.TypeID)}</Typography>
                        </TableCell>
                        <TableCell className={classes.note}>
                            <Typography>{row.ProductNote}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                className={classes.status}
                                onClick={() => {
                                    setProductUpdate(row);
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
