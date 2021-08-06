import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import InputImage from "./InputImage";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
import InputAddress from "./InputAddress";

import { useDispatch } from "react-redux";
import {
    addStore,
    editStore,
    getStoreRequest,
} from "../../../containers/Store/action";
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
        } else if (!Phone) {
            setPhoneCheck(true);
        } else if (checkupDate == true) {
            console.log("sửa");
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
            dispatch(getStoreRequest());
            handleClose();
        } else {
            console.log("thêm");
            dispatch(addStore(Name, Address, Phone, 0, 0, image, 0));
            dispatch(getStoreRequest());
            handleClose();
        }
    };
    React.useEffect(() => {
        console.log({ storeUpdate });
        if (storeUpdate) {
            setImage(storeUpdate.StoreImage);
            setAddress(storeUpdate.StoreAddress);
            setPhone(storeUpdate.StorePhone);
            setName(storeUpdate.StoreName);
            setCheckupDate(true);
        }
        return () => {
            console.log("clean up");
            setImage(null);
            setAddress(null);
            setPhone(null);
            setName(null);
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
                    <InputImage
                        image={image}
                        setImage={setImage}
                        imageCheck={imageCheck}
                        setImageCheck={setImageCheck}
                    />
                    <InputName
                        Name={Name}
                        setName={setName}
                        NameCheck={NameCheck}
                        setNameCheck={setNameCheck}
                    />
                    <InputAddress
                        Address={Address}
                        setAddress={setAddress}
                        AddressCheck={AddressCheck}
                        setAddressCheck={setAddressCheck}
                    />
                    <InputPhone
                        Phone={Phone}
                        setPhone={setPhone}
                        PhoneCheck={PhoneCheck}
                        setPhoneCheck={setPhoneCheck}
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
