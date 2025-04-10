import { Button, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
    suggestions: string[];
    onUpdateViolation: (update: string) => void;
};

const Suggestions: FC<Props> = ({ suggestions, onUpdateViolation }) => {
    const handleApplySuggestion = (update: string) => {
        onUpdateViolation(update);
    };
    
    if (!suggestions.length) {
        return null;
    }

    return (<div>
        <Typography gutterBottom variant="h6">Suggestions:</Typography>
        <Stack divider={<Divider flexItem/>} spacing={2}>
            {suggestions.map((suggestion) => (
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="body1">{suggestion}</Typography>
                    <Button onClick={() => handleApplySuggestion(suggestion)} variant="contained">Apply</Button>
                </Stack>
            ))}
        </Stack>
    </div>);
};

export default Suggestions;