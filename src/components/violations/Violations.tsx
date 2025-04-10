import { FC } from "react";
import { Violation as ViolationType } from "../../types";
import Violation from "./Violation";
import { Box, Typography } from "@mui/material";

type Props = {
    violations: ViolationType[];
    onDismiss: (violationId: string) => void;
    onUpdate: (violationId: string, update: string) => void;
};

const Violations: FC<Props> = ({ violations, onDismiss, onUpdate }) => {
    if (!violations.length) {
        return <Typography variant="body2">No outstanding violations.</Typography>
    };

    return <Box>
        {violations.map(violation => {
            return (<Violation key={violation.id} violation={violation} onDismiss={onDismiss} onUpdate={onUpdate} />);
        })}
    </Box>
};

export default Violations;