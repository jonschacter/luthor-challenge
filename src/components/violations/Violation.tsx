import { FC, useState } from "react";
import { Violation as ViolationType } from "../../types";
import ViolationHighlightText from "./ViolationHighlightText";
import {
    Button,
    Card,
    CardContent,
    Divider,
    Stack,
    Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { suggestions as suggestionsMock } from "../../mockData";
import UpdateViolationDialog from "./UpdateViolationDialog";
import DismissViolationDialog from "./DismissViolationDialog";

type Props = {
    violation: ViolationType;
    onDismiss: (violationId: string) => void;
    onUpdate: (violationId: string, update: string) => void;
};

const Violation: FC<Props> = ({ violation, onDismiss, onUpdate }) => {
    const [ isDismissDialogOpen, setIsDismissDialogOpen ] = useState<boolean>(false);
    const [ isUpdateDialogOpen, setIsUpdateDialogOpen ] = useState<boolean>(false);

    const suggestions = suggestionsMock[violation.id] || [];

    const handleOpenDismissDialog = () => {
        setIsDismissDialogOpen(true);
    };

    const handleCloseDismissDialog = () => {
        setIsDismissDialogOpen(false);
    };

    const handleDismiss = () => {
        onDismiss(violation.id);
        handleCloseDismissDialog();
    }

    const handleOpenUpdateDialog = () => {
        setIsUpdateDialogOpen(true);
    };

    const handleCloseUpdateDialog = () => {
        setIsUpdateDialogOpen(false);
    };

    const handleUpdate = (update: string) => {
        onUpdate(violation.id, update);
    }

    return (
        <>
            <Card sx={{ bgcolor: grey[200], mb: 2 }}>
                <CardContent>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        sx={{ alignItems: 'center' }}
                    >
                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                            <div>
                                <ViolationHighlightText violation={violation} />
                            </div>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Issue: {violation.message}</Typography>
                            <Typography variant="body2">Severity: {violation.severity}</Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <Button variant="contained" onClick={handleOpenUpdateDialog}>Update</Button>
                            <Button onClick={handleOpenDismissDialog}>Dismiss</Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>

            {isDismissDialogOpen && <DismissViolationDialog onClose={handleCloseDismissDialog} onDismiss={handleDismiss}/>}

            {isUpdateDialogOpen && <UpdateViolationDialog suggestions={suggestions} onClose={handleCloseUpdateDialog} onUpdateViolation={handleUpdate} />}
        </>
    );
};

export default Violation;