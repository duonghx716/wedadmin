import React from "react";
import TextField from "@material-ui/core/TextField";

const InputPrice = (props) => {
    const { Note, setNote, NoteCheck, setNoteCheck } = props;
    const onChange = (event) => {
        const { value } = event.target;
        setNote(value);
        setNoteCheck(false);
    };
    return (
        <TextField
            error={NoteCheck}
            id="outlined-password-input"
            label={!NoteCheck ? "Ghi chú" : "Không Được bỏ trống"}
            type="string"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText=""
            value={Note}
            onChange={onChange}
        />
    );
};
export default InputPrice;
