import {
    Button,
    InputBase,
    Paper,
    Table,
    TableContainer,
    TableFooter,
    TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreRequest } from "../../../containers/Store/action";
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
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    },
}));

function MTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const dispatch = useDispatch();
    const dataStore = useSelector((state) => state.store.data);
    const StoreSuccess = useSelector((state) => state.store.success);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(dataStore);
    const [storeUpdate, setStoreUpdate] = React.useState(dataStore);
    const [search] = React.useState(null);
    React.useEffect(() => {
        dispatch(getStoreRequest());
    }, [open]);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const onChangeSearch = (event) => {
        const { value } = event.target;
        const newData = dataStore?.filter((shipper) => {
            return (
                shipper.StoreName.toLowerCase().indexOf(value.toLowerCase()) !==
                -1
            );
        });
        setData(newData);
    };
    React.useEffect(() => {
        setData(dataStore);
    }, [dataStore]);
    return (
        <>
            <Modal open={open} setOpen={setOpen} storeUpdate={storeUpdate} />
            <div className={classes.container}>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        align="right"
                        onClick={() => {
                            setOpen(true);
                            // setShipperUpdate(null);
                        }}
                    >
                        Thêm Cửa hàng
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
                {StoreSuccess ? (
                    <Table className={classes.table} aria-label="simple table">
                        <Title />
                        <TableContent
                            data={data}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            setStoreUpdate={setStoreUpdate}
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
