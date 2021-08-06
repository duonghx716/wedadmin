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
import InputNote from "./InputNote";
import InputPrice from "./InputPrice";
import SelectType from "./SelectType";
import { useDispatch } from "react-redux";
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
            console.log("sửa");
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
            // dispatch(getProductRequest());
            handleClose();
        } else {
            console.log("thêm");
            dispatch(addProduct(Name, Price, image, Note, idType));
            // dispatch(getProductRequest());
            handleClose();
        }
    };
    React.useEffect(() => {
        console.log({ productUpdate });
        if (productUpdate) {
            setIdType(productUpdate.TypeID);
            setImage(productUpdate.ProductImage);
            setPrice(productUpdate.ProductPrice);
            setNote(productUpdate.ProductNote);
            setName(productUpdate.ProductName);
            setCheckupDate(true);
        }
        return () => {
            console.log("clean up");
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
                    <InputPrice
                        Price={Price}
                        setPrice={setPrice}
                        PriceCheck={PriceCheck}
                        setPriceCheck={setPriceCheck}
                    />
                    <InputNote
                        Note={Note}
                        setNote={setNote}
                        NoteCheck={NoteCheck}
                        setNoteCheck={setNoteCheck}
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
