import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { FC, useState } from "react";

type Props = {
    onClose: () => void;
    onDismiss: () => void;
};

const DismissViolationDialog: FC<Props> = ({ onClose, onDismiss }) => {
    const [ comment, setComment ] = useState('');

    const handleSubmit = () => {
        onDismiss();
    }

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Dismiss Violation</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please provide a reason for dismissal.
                </DialogContentText>
                <TextField
                    id="comment"
                    autoFocus
                    fullWidth
                    label="Comment"
                    multiline
                    name="comment"
                    required
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!comment} onClick={handleSubmit} type="submit">Dismiss</Button>
            </DialogActions>
        </Dialog>
    )
};

export default DismissViolationDialog;