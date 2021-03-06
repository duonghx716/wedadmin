import {
    Button,
    Paper,
    Table,
    TableContainer,
    TableFooter,
    TablePagination,
    InputBase,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import Title from "./Title";
import TableContent from "./TableContent";
import { getUserRequest, setMessenger } from "../../../containers/User/action";
import Loader from "../../Loader/Loader";
import { ToastError, ToastSuccess } from "../TostMessenger";

const useStyles = makeStyles(() => ({
    container: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 7,
        maxWidth: "100%",
    },
    chiddenContainer: {
        width: "40%",
    },
    search: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "30%",
        padding: 1,
        borderRadius: 7,
        minWidth: "100px",
        backgroundColor: "gray",
        height: "50px",
    },
}));
function Notification() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const user = useSelector((state) => state.user.data);
    // const userSuccess = useSelector((state) => state.user.success);
    const { successNoti } = useSelector((state) => state.user);
    const [checkedAll, setCheckedAll] = useState(false);
    const [countSelected, setCountSelected] = useState(0);
    const [data, setData] = useState();
    const seenMes = () => {
        const item = data
            ?.filter((user) => user.status === true)
            .map((user) => {
                return user.Token;
            });
        if (title && content && item.length !== 0) {
            dispatch(setMessenger(title, content, item));
        } else {
            return ToastError("Nh???p ????? th??ng tin");
        }
        if (successNoti) {
            setTitle("");
            setContent("");
            setCheckedAll(false);
            return ToastSuccess("G???i th??ng b??o th??nh c??ng");
        }
    };
    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const total = () => {
        if (countSelected === -1) {
            return `g???i t???i t???t c???  ng?????i d??ng`;
        } else if (countSelected !== 0) {
            return `g???i t???i ${countSelected} ng?????i d??ng`;
        }
    };

    const handleChange = (checked, id) => {
        const newData = data.map((data) => {
            const status = data.UserID === id ? checked : data.status;
            return { ...data, status };
        });
        const total = newData.filter((data) => {
            return data.status == true;
        });
        setCountSelected(total.length);
        setData(newData);
    };
    const newData = user?.map((data) => {
        return { ...data, status: checkedAll };
    });
    useEffect(() => {
        checkedAll ? setCountSelected(-1) : setCountSelected(0);
        setData(newData);
    }, [checkedAll, user]);
    useEffect(() => {
        dispatch(getUserRequest());
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.chiddenContainer}>
                <h1>N???i dung th??ng b??o {total()}</h1>
                <Input
                    value={title}
                    setValue={setTitle}
                    placeholder={" Nh???p ti??u ????? th??ng b??o"}
                    placeholderError=""
                />
                <Input
                    value={content}
                    setValue={setContent}
                    placeholder={" Nh???p n???i dung th??ng b??o"}
                    placeholderError=""
                    multiline={true}
                />
                <Button
                    variant="contained"
                    color="primary"
                    align="right"
                    onClick={() => seenMes()}
                >
                    G???i th??ng b??o
                </Button>
            </div>
            <div className={classes.chiddenContainer}>
                <h1>Th??ng tin ng?????i d??ng</h1>
                <TableContainer
                    component={Paper}
                    className={classes.tableContainer}
                >
                    {data ? (
                        <Table
                            className={classes.table}
                            aria-label="simple table"
                        >
                            <Title
                                checkedAll={checkedAll}
                                setCheckedAll={setCheckedAll}
                            />
                            <TableContent
                                data={data}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                handleChange={handleChange}
                            />
                        </Table>
                    ) : (
                        <Loader />
                    )}

                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15]}
                            component="div"
                            count={user?.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </TableContainer>
            </div>
        </div>
    );
}

export default Notification;
