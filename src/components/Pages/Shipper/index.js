import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Table,
    TableContainer,
    Paper,
    TablePagination,
    TableFooter,
    InputBase,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ModalAdd from "./ModalAdd/ModalAdd";
import Loader from "../../Loader/Loader";
import Title from "./Title";
import BodyTable from "./BodyTable";
import {
    getShipperRequest,
    addStatus,
    editStatus,
} from "../../../containers/Shipper/action";
import { getStoreRequest } from "../../../containers/Store/action";
import Button from "@material-ui/core/Button";

import SearchIcon from "@material-ui/icons/Search";
import { ToastError, ToastSuccess } from "../TostMessenger";
const useStyles = makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 7,
        margin: "10px 10px",
        maxWidth: "100%",
    },
    container: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 10px",
        width: "100%",
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
    },
}));

function MTable() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const dataShipper = useSelector((state) => state.shipper.data);
    const shipperSuccess = useSelector((state) => state.shipper.success);
    const [shipperUpdate, setShipperUpdate] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(dataShipper);
    const [search] = useState(null);
    const StatusAdd = useSelector((state) => state.shipper.addStatus);
    const StatusEdit = useSelector((state) => state.shipper.editStatus);

    const ToastMessengerAdd = (status) => {
        if (!status) return;
        if (status === 1) {
            console.log("status === 1");
            return ToastSuccess("Thêm shipper thành công");
        } else if (status === -1) {
            return ToastError("Thêm thất bại ! Số điện thoại đã tồn tại");
        } else {
            return ToastError("Thêm shipper thất bại");
        }
    };
    const ToastMessengerEdit = (status) => {
        if (!status) return;
        if (status === 1) {
            return ToastSuccess("Sửa shipper thành công");
        } else {
            return ToastError("Sửa shipper thất bại");
        }
    };
    useEffect(() => {
        if (!StatusAdd) return;
        ToastMessengerAdd(StatusAdd);
        return () => {
            dispatch(addStatus(null));
        };
    }, [StatusAdd]);
    useEffect(() => {
        ToastMessengerEdit(StatusEdit);
        return () => {
            dispatch(editStatus(null));
        };
    }, [StatusEdit]);
    const onChangeSearch = (event) => {
        const { value } = event.target;
        const newData = dataShipper?.filter((shipper) => {
            return (
                shipper.ShipName.toLowerCase().indexOf(value.toLowerCase()) !==
                -1
            );
        });
        setData(newData);
    };

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        dispatch(getShipperRequest());
        dispatch(getStoreRequest());
    }, []);
    useEffect(() => {
        setData(dataShipper);
    }, [dataShipper]);
    useEffect(() => {
        ToastMessengerAdd(StatusAdd);
        return () => {
            dispatch(addStatus(null));
        };
    }, [StatusAdd]);
    useEffect(() => {
        ToastMessengerEdit(StatusEdit);
        return () => {
            dispatch(editStatus(null));
        };
    }, [StatusEdit]);
    return (
        <>
            <ModalAdd
                open={open}
                setOpen={setOpen}
                shipperUpdate={shipperUpdate}
            />

            <div className={classes.container}>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        align="right"
                        onClick={() => {
                            setOpen(true);
                            setShipperUpdate(null);
                        }}
                    >
                        Thêm Shipper
                    </Button>
                </div>

                <div className={classes.search}>
                    <div>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Tìm kiếm theo tên...."
                        inputProps={{ "aria-label": "search" }}
                        value={search}
                        onChange={onChangeSearch}
                    />
                </div>
            </div>
            <TableContainer
                component={Paper}
                className={classes.tableContainer}
            >
                {shipperSuccess ? (
                    <Table className={classes.table} aria-label="simple table">
                        <Title />
                        <BodyTable
                            page={page}
                            rowsPerPage={rowsPerPage}
                            data={data}
                            setShipperUpdate={setShipperUpdate}
                            setOpen={setOpen}
                        />
                    </Table>
                ) : (
                    <Loader />
                )}

                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={data?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </TableContainer>
        </>
    );
}

export default MTable;
