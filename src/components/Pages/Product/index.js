import {
    Paper,
    Table,
    TableContainer,
    TableFooter,
    TablePagination,
    makeStyles,
    Button,
    InputBase,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addStatus,
    getProductRequest,
    getTypeRequest,
    editStatus,
} from "../../../containers/Product/action";
import Loader from "../../Loader/Loader";
import Modal from "./Modal";
import ModalType from "./ModalType";
import TableContent from "./TableContent";
import Title from "./Title";
import ListType from "./ListType";
import SearchIcon from "@material-ui/icons/Search";
import { ToastError, ToastSuccess } from "../TostMessenger";
const useStyles = makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 7,
        marginBottom: "20px",
        maxWidth: "100%",
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
    container: {
        marginBottom: "20px",
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    },
}));

function MTable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const dispatch = useDispatch();
    const [productUpdate, setProductUpdate] = useState(null);
    const [TypeUpdate, setTypeUpdate] = useState(null);
    const productSuccess = useSelector((state) => state.product.success);
    const type = useSelector((state) => state.product.type);
    const dataProduct = useSelector((state) => state.product.data);
    const [open, setOpen] = React.useState(false);
    const [openModalType, setOpenModalType] = React.useState(false);
    const [data, setData] = useState(dataProduct);
    const StatusAdd = useSelector((state) => state.product.addStatus);
    const StatusEdit = useSelector((state) => state.product.editStatus);
    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [search] = useState(null);

    const onChangeSearch = (event) => {
        const { value } = event.target;
        const newData = dataProduct?.filter((shipper) => {
            return (
                shipper.ProductName.toLowerCase().indexOf(
                    value.toLowerCase()
                ) !== -1
            );
        });
        setData(newData);
    };
    const ToastMessengerAdd = (status) => {
        if (!status) return;
        if (status === 1) {
            return ToastSuccess("Thêm thành công");
        } else if (status === -1) {
            return ToastError("Thêm thất bại ! Tên đã tồn tại");
        } else {
            return ToastError("Thêm thất bại");
        }
    };
    const ToastMessengerEdit = (status) => {
        if (!status) return;
        if (status === 1) {
            return ToastSuccess("Sửa thành công");
        } else {
            return ToastError("Sửa thất bại");
        }
    };
    useEffect(() => {
        setData(dataProduct);
    }, [dataProduct]);
    useEffect(() => {
        dispatch(getProductRequest());
        dispatch(getTypeRequest());
    }, []);

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
            <Modal
                open={open}
                setOpen={setOpen}
                productUpdate={productUpdate}
            />
            <ModalType
                openModalType={openModalType}
                setOpenModalType={setOpenModalType}
                TypeUpdate={TypeUpdate}
            />
            <div className={classes.container}>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        align="right"
                        onClick={() => {
                            setOpen(true);
                            setProductUpdate(null);
                        }}
                    >
                        Thêm Sản phẩm
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
                {productSuccess ? (
                    <Table className={classes.table} aria-label="simple table">
                        <Title />
                        <TableContent
                            dataProduct={data}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            type={type}
                            setProductUpdate={setProductUpdate}
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
            <ListType
                setOpenModalType={setOpenModalType}
                setTypeUpdate={setTypeUpdate}
            />
        </>
    );
}

export default MTable;
