import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        width: "50%",
        backgroundColor: "Silver",
        padding: 20,
        borderRadius: 15,
    },
    title: {
        width: "100%",
        padding: 20,
        fontSize: 30,
        borderRadius: 10,
        backgroundColor: "#0EAB19",
        justifyContent: "center",
        display: "grid",
        margin: "10px",
    },
    btn: {
        width: "100%",
        padding: 20,
        fontSize: 30,
        borderRadius: 10,
        margin: "10px",
        backgroundColor: "blue",
    },
    row: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    },
    btnadd: {
        width: "100%",
        // padding: 20,
        // fontSize: 30,
        // borderRadius: 10,
        margin: "10px",
        backgroundColor: "blue",
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
            <div>
                <ListItemText
                    primary="Danh Sách Loại Sản phẩm"
                    className={classes.title}
                />
                {/* <ListItemText
                    primary="Thêm Loại"
                    className={classes.btn}
                    onClick={handleClick}
                /> */}
                <Button
                    className={classes.btnadd}
                    variant="contained"
                    color="primary"
                    align="right"
                    onClick={handleClick}
                >
                    <ListItemText
                        secondary={"Thêm Loại"}
                        className={classes.title}
                    />
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
