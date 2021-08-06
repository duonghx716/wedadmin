import { TableCell, TableHead, TableRow } from "@material-ui/core";
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
    "Ngày bắt đầu",
    "Ngày Kết thúc",
    "Ghi chú",
    "Điều kiện",
    "Giá",
    "Trạng thái",
    "Tuỳ chỉnh",
];
function MTable() {
    const classes = useStyles();

    return (
        <TableHead>
            <TableRow>
                {data.map((item) => (
                    <TableCell className={classes.tableHeaderCell}>
                        {item}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default MTable;
