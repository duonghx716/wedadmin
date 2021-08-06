import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        backgroundColor: "gray",
        padding: 20,
        borderRadius: 15,
    },
    title: {
        width: "100%",
        padding: 20,
        fontSize: 30,
        borderRadius: 10,
        backgroundColor: "blue",
    },
    btn: {
        marginRight: 10,
        marginTop: 20,
    },
    row: {
        flexDirection: "row",
    },
}));

export default function FolderList({ setOpenModalType, setTypeUpdate }) {
    const classes = useStyles();
    const type = useSelector((state) => state.product.types);
    const handleClick = () => {
        setOpenModalType(true);
        setTypeUpdate(null);
    };
    return (
        <List className={classes.root}>
            <div className={classes.row}>
                <ListItemText
                    primary="Danh Sách Loại Sản phẩm"
                    className={classes.title}
                />
                <Button
                    variant="contained"
                    color="primary"
                    align="right"
                    onClick={handleClick}
                >
                    Thêm Loại
                </Button>
            </div>

            {type?.map((item) => (
                <Button
                    variant="contained"
                    color="primary"
                    align="right"
                    className={classes.btn}
                    onClick={() => {
                        setTypeUpdate(item);
                        setOpenModalType(true);
                    }}
                >
                    <ListItemText secondary={item.TypeName} />
                </Button>
            ))}
        </List>
    );
}
