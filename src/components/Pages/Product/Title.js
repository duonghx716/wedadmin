import { TableCell, TableHead } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    tableHeaderCell: {
        width: "50px",
        fontWeight: "bold",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
}));
const data = [
    "Hình ảnh",
    "Tên sản phẩm",
    "Gía",
    " Phân loại",
    "Ghi chú",
    "Tuỳ chỉnh",
];
function Title() {
    const classes = useStyles();

    return (
        <TableHead>
            {data.map((item) => {
                return (
                    <TableCell className={classes.tableHeaderCell}>
                        {item}
                    </TableCell>
                );
            })}
        </TableHead>
    );
}

export default Title;
