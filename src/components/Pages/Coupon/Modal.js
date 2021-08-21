import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { addCoupon, editCoupon } from "../../../containers/Coupon/action";
import Input from "../Input";
const useStyles = makeStyles(() => ({
    date: {
        width: "100%",
        height: "50px",
    },
    textError: {
        color: "red",
    },
}));
export default function FormDialog(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const dateStart = new Date();
    const { open, setOpen, couponUpdate } = props;
    const [image, setImage] = useState("");
    const [isImageCheck, setIsImageCheck] = useState(false);
    const [dateEnd, setDateEnd] = useState("");
    const [isDateEndCheck, setIsDateEndCheck] = useState(false);
    const [note, setNote] = useState("");
    const [isNoteCheck, setIsNoteCheck] = useState(false);
    const [condition, setCondition] = useState("");
    const [isConditionCheck, setIsConditionCheck] = useState(false);
    const [price, setPrice] = useState("");
    const [isPriceCheck, setIsPriceCheck] = useState(false);
    const [checkupDate, setCheckupDate] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const foumartDate = (date) => {
        const date1 = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const string = `${date.getFullYear()}-${month}-${date1}`;
        return string;
    };
    const handAddProduct = () => {
        const numberRegex = /^[0-9]{4,10}$/;
        if (!image) {
            setIsImageCheck(true);
        } else if (!dateEnd) {
            setIsDateEndCheck(true);
        } else if (!note) {
            setIsNoteCheck(true);
        } else if (!numberRegex.test(condition)) {
            setIsConditionCheck(true);
        } else if (!numberRegex.test(price)) {
            setIsPriceCheck(true);
        } else if (checkupDate == true) {
            const endDate = foumartDate(dateEnd);
            const startDate = foumartDate(dateStart);
            const status = "Đang Chạy";
            dispatch(
                editCoupon(
                    image,
                    startDate,
                    endDate,
                    note,
                    condition,
                    price,
                    status,
                    couponUpdate.CouponID
                )
            );
            handleClose();
        } else {
            const endDate = foumartDate(dateEnd);
            const startDate = foumartDate(dateStart);
            const status = "Đang Chạy";
            dispatch(
                addCoupon(
                    image,
                    startDate,
                    endDate,
                    note,
                    condition,
                    price,
                    status
                )
            );
            handleClose();
        }
    };
    useEffect(() => {
        if (couponUpdate) {
            const {
                DateEnd,
                CouponImage,
                CouponNote,
                CouponCondition,
                CouponPrice,
            } = couponUpdate;
            const date = new Date(DateEnd);
            setImage(CouponImage);
            setDateEnd(date);
            setNote(CouponNote);
            setCondition(CouponCondition);
            setPrice(CouponPrice);
            setCheckupDate(true);
        }
        return () => {
            setImage(null);
            setDateEnd(null);
            setNote(null);
            setCondition(null);
            setPrice(null);
            setCheckupDate(false);
        };
    }, [open]);
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    {checkupDate ? " Sửa" : "Thêm"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Nhập thông khuyễn mãi</DialogContentText>
                    <Input
                        value={image}
                        setValue={setImage}
                        isCheck={isImageCheck}
                        setIsCheck={setIsImageCheck}
                        placeholder={"Hinh ảnh"}
                    />
                    <Input
                        value={note}
                        setValue={setNote}
                        isCheck={isNoteCheck}
                        setIsCheck={setIsNoteCheck}
                        placeholder={"Ghi chú"}
                    />
                    <Input
                        value={condition}
                        setValue={setCondition}
                        isCheck={isConditionCheck}
                        setIsCheck={setIsConditionCheck}
                        placeholder={"Điều Kiện "}
                        placeholderError={"Phải là số và  ít nhất 4 số"}
                        desc={"Nhập số ví dụ 10000"}
                    />
                    <Input
                        value={price}
                        setValue={setPrice}
                        isCheck={isPriceCheck}
                        setIsCheck={setIsPriceCheck}
                        placeholder={"Giá giảm"}
                        placeholderError={"Phải là số và  ít nhất 4 số"}
                        desc={"Nhập số ví dụ 10000"}
                    />
                    <div>
                        <h4 className={isDateEndCheck && classes.textError}>
                            {isDateEndCheck
                                ? "Phải chọn ngày Kết thúc"
                                : "Ngày kết thúc"}
                        </h4>
                        <DatePicker
                            onChange={setDateEnd}
                            value={dateEnd}
                            minDate={dateStart}
                            format={"yyyy-MM-dd"}
                            className={classes.date}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Huỷ
                    </Button>
                    <Button onClick={handAddProduct} color="primary">
                        {checkupDate ? " Sửa" : "Thêm"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
