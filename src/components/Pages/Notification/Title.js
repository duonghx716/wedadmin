import { TableCell, TableHead } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
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
    "Tên người dùng",
    "Số điện thoại",
    "Ngày sinh",
    "Email",
];
function Title(props) {
    const classes = useStyles();
    const { checkedAll, setCheckedAll } = props;
    const handleChange = (event) => {
        setCheckedAll(event.target.checked);
    };
    return (
        <TableHead>
            <TableCell className={classes.tableHeaderCell}>
                <Checkbox
                    checked={checkedAll}
                    onChange={handleChange}
                    inputProps={{
                        "aria-label": "primary checkbox",
                    }}
                />
            </TableCell>

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
