import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { addType, EditType } from "../../../containers/Product/action";
export default function FormDialog(props) {
    const dispatch = useDispatch();
    const { openModalType, setOpenModalType, TypeUpdate } = props;
    const [Note, setNote] = useState("");
    const [NoteCheck, setNoteCheck] = useState(false);
    const [Name, setName] = useState("");
    const [NameCheck, setNameCheck] = useState(false);
    const [checkupDate, setCheckupDate] = useState(false);
    const handleClose = () => {
        setOpenModalType(false);
    };
    const handAddProduct = () => {
        if (!Name) {
            setNameCheck(true);
        } else if (!Note) {
            setNoteCheck(true);
        } else if (checkupDate == true) {
            dispatch(EditType(Name, Note, TypeUpdate.TypeID));
            handleClose();
        } else {
            dispatch(addType(Name, Note));
            handleClose();
        }
    };
    useEffect(() => {
        if (TypeUpdate) {
            setNote(TypeUpdate.TypeNote);
            setName(TypeUpdate.TypeName);
            setCheckupDate(true);
        }
        return () => {
            setNote(null);
            setName(null);
            setCheckupDate(false);
        };
    }, [openModalType]);
    return (
        <div>
            <Dialog
                open={openModalType}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    {checkupDate ? " Sửa" : "Thêm"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nhập thông tin loại sản phẩm
                    </DialogContentText>
                    <Input
                        value={Name}
                        setValue={setName}
                        isCheck={NameCheck}
                        setIsCheck={setNameCheck}
                        placeholder={"Tên sản phẩm"}
                    />
                    <Input
                        value={Note}
                        setValue={setNote}
                        isCheck={NoteCheck}
                        setIsCheck={setNoteCheck}
                        placeholder={"Ghi chú"}
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
