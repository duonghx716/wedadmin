import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addShipper, editShipper } from "../../../../containers/Shipper/action";
import Input from "../../Input";
import SelectStore from "./SelectStore";
import { RegexCarNumber, RegexPhoneNumber, RegexName } from "../../Regex";

const ModalAdd = ({ open, setOpen, shipperUpdate }) => {
    const dispatch = useDispatch();
    const [idStore, setIDStore] = useState("");
    const [checkStore, setCheckStore] = useState(false);
    const [image, setImage] = useState(null);
    const [checkImage, setCheckImage] = useState(false);
    const [name, setName] = useState(null);
    const [checkName, setCheckName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);
    const [carNumber, setCarNumber] = useState(null);
    const [checkCarNumber, setCheckCarNumber] = useState(false);
    const [checkupDate, setCheckupDate] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        if (!image) {
            setCheckImage(true);
        } else if (!RegexName(name)) {
            setCheckName(true);
        } else if (!RegexPhoneNumber.test(phoneNumber)) {
            setCheckPhoneNumber(true);
        } else if (!RegexCarNumber.test(carNumber)) {
            setCheckCarNumber(true);
        } else if (!idStore) {
            setCheckStore(true);
        } else if (checkupDate == true) {
            dispatch(editShipper(name, image, phoneNumber, carNumber, idStore));
            handleClose();
        } else {
            dispatch(addShipper(name, image, phoneNumber, carNumber, idStore));
            handleClose();
        }
    };
    useEffect(() => {
        if (shipperUpdate) {
            setIDStore(shipperUpdate.StoreID);
            setImage(shipperUpdate.ShipImage);
            setName(shipperUpdate.ShipName);
            setPhoneNumber(`0${shipperUpdate.ShipPhone}`);
            setCarNumber(shipperUpdate.ShipNumberCar);
            setCheckupDate(true);
        }
        return () => {
            setIDStore("");
            setImage(null);
            setName(null);
            setPhoneNumber(null);
            setCarNumber(null);
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
                    {!checkupDate ? "Th??m" : "S???a"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nh???p th??ng tin c???a t??i x??
                    </DialogContentText>
                    <Input
                        value={image}
                        setValue={setImage}
                        isCheck={checkImage}
                        setIsCheck={setCheckImage}
                        placeholder={"H??nh ???nh"}
                        desc={
                            "h??nh ???nh l?? link url vd: https://knowlab.inpaper-1920x1200-1920x1080.jpg"
                        }
                    />
                    <Input
                        value={name}
                        setValue={setName}
                        isCheck={checkName}
                        setIsCheck={setCheckName}
                        placeholder={"T??n"}
                    />
                    <Input
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        isCheck={checkPhoneNumber}
                        setIsCheck={setCheckPhoneNumber}
                        readOnly={checkupDate}
                        placeholder={
                            checkupDate
                                ? "Kh??ng ???????c s???a s??? ??i???n tho???i"
                                : "S??? ??i???n tho???i"
                        }
                        placeholderError={"Ki???m tra l???i s??? ??i???n tho???i c???a b???n"}
                        desc={
                            "S??? ??i???n tho???i g???m 10 - 11 s??? , b???t ?????u b???ng 03,05,07,08,09 ."
                        }
                    />
                    <Input
                        value={carNumber}
                        setValue={setCarNumber}
                        isCheck={checkCarNumber}
                        setIsCheck={setCheckCarNumber}
                        placeholder={"Bi???n s??? xe"}
                        placeholderError={"ki???m tra l???i bi???n s??? xe"}
                        desc={
                            "?????nh d???ng bi???n s??? xe : 47F1-99999,47F1-9999,47AB-1234"
                        }
                    />
                    <SelectStore
                        idStore={idStore}
                        setIDStore={setIDStore}
                        checkStore={checkStore}
                        setCheckStore={setCheckStore}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hu???
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        {!checkupDate ? "Th??m" : "S???a"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default ModalAdd;
