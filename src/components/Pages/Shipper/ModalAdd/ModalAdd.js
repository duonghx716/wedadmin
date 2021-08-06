import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import InputNumberPhone from "./InputNumberPhone";
import InputCarNumber from "./InputCarNumber";
import InputImage from "./InputImage";
import SelectStore from "./SelectStore";
import InputName from "./InputName";
import {
    addShipper,
    editShipper,
    getShipperRequest,
} from "../../../../containers/Shipper/action";
import { TrendingUpRounded } from "@material-ui/icons";

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
        const number_phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        const car_number_regex =
            /^[0-9]{2}?[a-zA-Z]{1}?[a-zA-Z\-0-9]{1} ?- ?[0-9]{4,5}$/;
        const name_regex = /^[a-zA-Z ]{2,30}$/;
        if (!image) {
            setCheckImage(true);
            // } else if (!name_regex.test(name)) {
        } else if (!name) {
            setCheckName(true);
        } else if (!number_phone_regex.test(phoneNumber)) {
            setCheckPhoneNumber(true);
        } else if (!car_number_regex.test(carNumber)) {
            setCheckCarNumber(true);
        } else if (!idStore) {
            setCheckStore(true);
        } else if (checkupDate == true) {
            console.log("sửa");
            dispatch(editShipper(name, image, phoneNumber, carNumber, idStore));
            dispatch(getShipperRequest());
            handleClose();
        } else {
            console.log("thêm");
            dispatch(addShipper(name, image, phoneNumber, carNumber, idStore));
            dispatch(getShipperRequest());
            handleClose();
        }
    };
    React.useEffect(() => {
        console.log({ shipperUpdate });
        if (shipperUpdate) {
            setIDStore(shipperUpdate.StoreID);
            setImage(shipperUpdate.ShipImage);
            setName(shipperUpdate.ShipName);
            setPhoneNumber(`0${shipperUpdate.ShipPhone}`);
            setCarNumber(shipperUpdate.ShipNumberCar);
            setCheckupDate(true);
        }
        return () => {
            console.log("clean up");
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
                    {!checkupDate ? "Thêm" : "Sửa"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nhập thông tin của tài xê
                    </DialogContentText>
                    <InputImage
                        image={image}
                        setImage={setImage}
                        checkImage={checkImage}
                        setCheckImage={setCheckImage}
                    />
                    <InputName
                        name={name}
                        setName={setName}
                        checkName={checkName}
                        setCheckName={setCheckName}
                    />
                    <InputNumberPhone
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        checkPhoneNumber={checkPhoneNumber}
                        setCheckPhoneNumber={setCheckPhoneNumber}
                    />
                    <InputCarNumber
                        carNumber={carNumber}
                        setCarNumber={setCarNumber}
                        checkCarNumber={checkCarNumber}
                        setCheckCarNumber={setCheckCarNumber}
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
                        Huỷ
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        {!checkupDate ? "Thêm" : "Sửa"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default ModalAdd;
