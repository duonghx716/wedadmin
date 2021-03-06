import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import SelectType from "./SelectType";
import { useDispatch } from "react-redux";
import Input from "../Input";
import {
    addProduct,
    editProduct,
    getProductRequest,
} from "../../../containers/Product/action";
export default function FormDialog(props) {
    const dispatch = useDispatch();
    const { open, setOpen, productUpdate } = props;
    const [idType, setIdType] = useState("");
    const [idTypeCheck, setIdTypeCheck] = useState(false);
    const [image, setImage] = useState("");
    const [imageCheck, setImageCheck] = useState(false);
    const [Price, setPrice] = useState("");
    const [PriceCheck, setPriceCheck] = useState(false);
    const [Note, setNote] = useState("");
    const [NoteCheck, setNoteCheck] = useState(false);
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
        } else if (!Price) {
            setPriceCheck(true);
        } else if (!Note) {
            setNoteCheck(true);
        } else if (!idType) {
            setIdTypeCheck(true);
        } else if (checkupDate == true) {
            dispatch(
                editProduct(
                    productUpdate.ProductID,
                    Name,
                    Price,
                    image,
                    Note,
                    idType
                )
            );
            handleClose();
        } else {
            dispatch(addProduct(Name, Price, image, Note, idType));
            handleClose();
        }
    };
    React.useEffect(() => {
        if (productUpdate) {
            setIdType(productUpdate.TypeID);
            setImage(productUpdate.ProductImage);
            setPrice(productUpdate.ProductPrice);
            setNote(productUpdate.ProductNote);
            setName(productUpdate.ProductName);
            setCheckupDate(true);
        }
        return () => {
            setIdType("");
            setImage(null);
            setPrice(null);
            setNote(null);
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
                        placeholder={"T??n s???n ph???m"}
                    />
                    <Input
                        value={Price}
                        setValue={setPrice}
                        isCheck={PriceCheck}
                        setIsCheck={setPriceCheck}
                        placeholder={"Gi??"}
                    />
                    <Input
                        value={Note}
                        setValue={setNote}
                        isCheck={NoteCheck}
                        setIsCheck={setNoteCheck}
                        placeholder={"Ghi ch??"}
                    />

                    <SelectType
                        idType={idType}
                        setIdType={setIdType}
                        idTypeCheck={idTypeCheck}
                        setIdTypeCheck={setIdTypeCheck}
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
