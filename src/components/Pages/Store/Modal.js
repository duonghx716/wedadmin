import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStore, editStore } from "../../../containers/Store/action";
import Input from "../Input";
import { RegexPhoneNumber } from "../Regex";

export default function FormDialog(props) {
    const dispatch = useDispatch();
    const { open, setOpen, storeUpdate } = props;
    const [image, setImage] = useState("");
    const [imageCheck, setImageCheck] = useState(false);
    const [Address, setAddress] = useState("");
    const [AddressCheck, setAddressCheck] = useState(false);
    const [Phone, setPhone] = useState("");
    const [PhoneCheck, setPhoneCheck] = useState(false);
    const [Name, setName] = useState("");
    const [NameCheck, setNameCheck] = useState(false);
    const [checkupDate, setCheckupDate] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handAddProduct = () => {
        if (!image) {
            setImageCheck(true);
        } else if (!Name) {
            setNameCheck(true);
        } else if (!Address) {
            setAddressCheck(true);
        } else if (!RegexPhoneNumber.test(Phone)) {
            setPhoneCheck(true);
        } else if (checkupDate) {
            dispatch(
                editStore(
                    Name,
                    Address,
                    Phone,
                    0,
                    0,
                    image,
                    0,
                    storeUpdate.StoreID
                )
            );
            handleClose();
        } else {
            dispatch(addStore(Name, Address, Phone, 0, 0, image, 0));
            handleClose();
        }
    };
    useEffect(() => {
        if (storeUpdate) {
            setImage(storeUpdate.StoreImage);
            setAddress(storeUpdate.StoreAddress);
            setPhone(storeUpdate.StorePhone);
            setName(storeUpdate.StoreName);
            setCheckupDate(true);
        }
        return () => {
            setImage(null);
            setAddress(null);
            setPhone(null);
            setName(null);
            setImageCheck(false);
            setAddressCheck(false);
            setPhoneCheck(false);
            setNameCheck(false);
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
                    <DialogContentText>
                        Nhập thông tin sản phẩm
                    </DialogContentText>

                    <Input
                        value={image}
                        setValue={setImage}
                        isCheck={imageCheck}
                        setIsCheck={setImageCheck}
                        placeholder={"Hình ảnh"}
                        desc={
                            "hình ảnh là link url vd: https://knowlab.inpaper-1920x1200-1920x1080.jpg"
                        }
                    />
                    <Input
                        value={Name}
                        setValue={setName}
                        isCheck={NameCheck}
                        setIsCheck={setNameCheck}
                        placeholder={"Tên cửa hàng"}
                    />
                    <Input
                        value={Address}
                        setValue={setAddress}
                        isCheck={AddressCheck}
                        setIsCheck={setAddressCheck}
                        placeholder={"Địa chỉ"}
                    />
                    <Input
                        value={Phone}
                        setValue={setPhone}
                        isCheck={PhoneCheck}
                        setIsCheck={setPhoneCheck}
                        placeholder={"Số điện thoại"}
                        placeholderError={"Số điện thoại phải là 10 -11 số"}
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
