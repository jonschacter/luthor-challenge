import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import Suggestions from "../suggestions/Suggestions";

type Props = {
    suggestions: string[];
    onClose: () => void;
    onUpdateViolation: (update: string) => void;
};

const UpdateViolationDialog: FC<Props> = ({ suggestions, onClose, onUpdateViolation }) => {
    const [ updateFormText, setUpdateFormText ] = useState('');

    const handleUpdateViolation = (update: string) => {
        onUpdateViolation(update);
        onClose();
    };

    return <Dialog open onClose={onClose}>
        <DialogTitle variant="h5">Update Violation</DialogTitle>
        <DialogContent>
            <Stack gap={4}>
                <Suggestions suggestions={suggestions} onUpdateViolation={handleUpdateViolation} />
                <TextField 
                    id="update"
                    autoFocus
                    fullWidth
                    label="Custom Update"
                    multiline
                    name="update"
                    placeholder="Or write in your own update..."
                    value={updateFormText}
                    onChange={(event) => setUpdateFormText(event.target.value)}
                />
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button disabled={!updateFormText} onClick={() => handleUpdateViolation(updateFormText)} type="submit">Update</Button>
        </DialogActions>
    </Dialog>
};

export default UpdateViolationDialog;