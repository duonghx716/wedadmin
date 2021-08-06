import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import {
    addProduct,
    editProduct,
    getProductRequest,
} from "../../../containers/Product/action";
export default function FormDialog(props) {
    const dispatch = useDispatch();
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
    const handAddProduct = () => {
        // if (!image) {
        //     setImageCheck(true);
        // } else if (!Name) {
        //     setNameCheck(true);
        // } else if (!Price) {
        //     setPriceCheck(true);
        // } else if (!Note) {
        //     setNoteCheck(true);
        // } else if (!idType) {
        //     setIdTypeCheck(true);
        // } else if (checkupDate == true) {
        //     console.log("sửa");
        //     dispatch(
        //         editProduct(
        //             couponUpdate.ProductID,
        //             Name,
        //             Price,
        //             image,
        //             Note,
        //             idType
        //         )
        //     );
        //     // dispatch(getProductRequest());
        //     handleClose();
        // } else {
        //     console.log("thêm");
        //     dispatch(addProduct(Name, Price, image, Note, idType));
        //     // dispatch(getProductRequest());
        //     handleClose();
        // }
    };
    // React.useEffect(() => {
    //     if (couponUpdate) {
    //         setImage(couponUpdate.CouponImage);
    //         setDateEnd(couponUpdate.DateEnd);
    //         setNote(couponUpdate.CouponNote);
    //         setCondition(couponUpdate.CouponCondition);
    //         setPrice(couponUpdate.CouponPrice);

    //         setCheckupDate(true);
    //     }
    //     return () => {
    //         setImage(null);
    //         setDateEnd(null);
    //         setNote(null);
    //         setCondition(null);
    //         setPrice(null);
    //         setCheckupDate(false);
    //     };
    // }, [open]);
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
                        value={dateEnd}
                        setValue={setDateEnd}
                        isCheck={isDateEndCheck}
                        setIsCheck={setIsDateEndCheck}
                        placeholder={"Ngày kết thúc"}
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
                    />
                    <Input
                        value={price}
                        setValue={setPrice}
                        isCheck={isPriceCheck}
                        setIsCheck={setIsPriceCheck}
                        placeholder={"Giá giảm"}
                    />
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
