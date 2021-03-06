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
                    {checkupDate ? " S???a" : "Th??m"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nh???p th??ng tin s???n ph???m
                    </DialogContentText>

                    <Input
                        value={image}
                        setValue={setImage}
                        isCheck={imageCheck}
                        setIsCheck={setImageCheck}
                        placeholder={"H??nh ???nh"}
                        desc={
                            "h??nh ???nh l?? link url vd: https://knowlab.inpaper-1920x1200-1920x1080.jpg"
                        }
                    />
                    <Input
                        value={Name}
                        setValue={setName}
                        isCheck={NameCheck}
                        setIsCheck={setNameCheck}
                        placeholder={"T??n c???a h??ng"}
                    />
                    <Input
                        value={Address}
                        setValue={setAddress}
                        isCheck={AddressCheck}
                        setIsCheck={setAddressCheck}
                        placeholder={"?????a ch???"}
                    />
                    <Input
                        value={Phone}
                        setValue={setPhone}
                        isCheck={PhoneCheck}
                        setIsCheck={setPhoneCheck}
                        placeholder={"S??? ??i???n tho???i"}
                        placeholderError={"S??? ??i???n tho???i ph???i l?? 10 -11 s???"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hu???
                    </Button>
                    <Button onClick={handAddProduct} color="primary">
                        {checkupDate ? " S???a" : "Th??m"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
