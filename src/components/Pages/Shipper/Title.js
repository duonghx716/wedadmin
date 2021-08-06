import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

const dataTitle = [
    "Hình ảnh",
    "Tên",
    "Số điện thoại",
    "Biển số xe",
    "Trạng thái",
    "Của hàng",
    "Tuỳ chỉnh",
];
const useStyles = makeStyles((theme) => ({
    tableHeaderCell: {
        width: "50px",
        fontWeight: "bold",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
}));

export const Title = () => {
    const classes = useStyles();

    return (
        <TableHead>
            <TableRow>
                {dataTitle.map((title) => (
                    <TableCell key={title} className={classes.tableHeaderCell}>
                        {title}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default Title;
