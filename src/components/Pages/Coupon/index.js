import {
    Button,
    Paper,
    Table,
    TableContainer,
    TableFooter,
    TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCouponRequest } from "../../../containers/Coupon/action";
import Loader from "../../Loader/Loader";
import Modal from "./Modal";
import TableContent from "./TableContent";
import Title from "./Title";
const useStyles = makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: "10px 10px",
        maxWidth: "100%",
    },
}));

function Coupon() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const dispatch = useDispatch();
    const dataCoupon = useSelector((state) => state.Coupon.data);
    const [couponUpdate, setCouponUpdate] = React.useState(null);
    const CouponSuccess = useSelector((state) => state.Coupon.success);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(dataCoupon);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    React.useEffect(() => {
        dispatch(getCouponRequest());
    }, []);
    React.useEffect(() => {
        setData(dataCoupon);
    }, [dataCoupon]);

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
