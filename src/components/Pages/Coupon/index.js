import {
    Button,
    Paper,
    Table,
    TableContainer,
    TableFooter,
    TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addStatus,
    editStatus,
    getCouponRequest,
} from "../../../containers/Coupon/action";
import Loader from "../../Loader/Loader";
import { ToastError, ToastSuccess } from "../TostMessenger";
import Modal from "./Modal";
import TableContent from "./TableContent";
import Title from "./Title";
const useStyles = makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 7,
        marginTop: "10px",
        maxWidth: "100%",
    },
}));

function Coupon() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const dispatch = useDispatch();
    const dataCoupon = useSelector((state) => state.Coupon.data);
    const [couponUpdate, setCouponUpdate] = useState(null);
    const CouponSuccess = useSelector((state) => state.Coupon.success);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(dataCoupon);
    const StatusAdd = useSelector((state) => state.Coupon.addStatus);
    const StatusEdit = useSelector((state) => state.Coupon.editStatus);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const ToastMessengerAdd = (status) => {
        if (!status) return;
        if (status === 1) {
            return ToastSuccess("Thêm khuyễn mãi thành công");
        } else {
            return ToastError("Thêm khuyễn mãi thất bại");
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
        dispatch(getCouponRequest());
    }, [open]);
    useEffect(() => {
        setData(dataCoupon);
    }, [dataCoupon]);
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
            <Modal open={open} setOpen={setOpen} couponUpdate={couponUpdate} />
            <Button
                variant="contained"
                color="primary"
                align="right"
                onClick={() => {
                    setOpen(true);
                    setCouponUpdate(null);
                }}
            >
                Thêm khuyến mãi
            </Button>
            <TableContainer
                component={Paper}
                className={classes.tableContainer}
            >
                {CouponSuccess ? (
                    <Table className={classes.table} aria-label="simple table">
                        <Title />
                        <TableContent
                            data={data}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            setCouponUpdate={setCouponUpdate}
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

export default Coupon;
