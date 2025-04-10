import { FC, ReactNode, useState } from "react"
import { paragraph, violations as violationsMock } from "./mockData"
import { Violation } from "./types";
import Violations from './components/violations/Violations';
import ViolationHighlightText from "./components/violations/ViolationHighlightText";
import { Card, CardContent, Container, Typography } from "@mui/material";

const App: FC = () => {
    const [ text, setText ] = useState<string>(paragraph);
    const [ violations, setViolations ] = useState<Violation[]>(violationsMock);

    const handleDismissViolation = (violationId: string) => {
        // NOTE: In practice this function would likely take the provided comment and call a backend function
        // but for this example it will just update the state.

        setViolations(prevState => prevState.filter(violation => violation.id !== violationId));
    };

    const handleUpdateViolation = (violationId: string, update: string) => {
        const violation = violations.find(v => v.id === violationId);

        if (!violation) {
            return;
        }

        // NOTE: There is a bunch of extra logic to handle updating the state to account for updates with different lengths.
        // In practice I would expect the backend to provide updated data, including new start/end indices and
        // dismissing violations if they have been properly addressed.

        const offset = update.length - violation.length;
        
        // Update paragraph with new string
        setText(str => {
            const start = violation.start;
            const end = violation.end;

            return str.substring(0, start) + update + str.substring(end);
        });

        // Dismiss the updated violation
        handleDismissViolation(violation.id);

        if (offset !== 0) {
            // Update violation start/end indices based on offset
            setViolations(prev => {
                return prev.map(v => {
                    return v.start >= violation.start ? {
                        ...v,
                        start: v.start + offset,
                        end: v.end + offset,
                    } : v
                })
            });
        }
    };

    const renderParagraph = () => {
        const nodes: ReactNode[] = [];
        let lastIndex = 0;

        violations.forEach((violation) => {
            // Previous non-violating text
            nodes.push(
              <span>{text.slice(lastIndex, violation.start)}</span>
            );

            nodes.push(
              <ViolationHighlightText violation={violation} />
            );

            lastIndex = violation.end;
        });
        
        const remainingText = text.slice(lastIndex);
        if (remainingText) {
            nodes.push(<span>{remainingText}</span>)
        }

        return nodes;
    }

    return (
        <Container>
            <Typography align="center" gutterBottom variant="h2">Compliance Review</Typography>

            <Card sx={{ mb: 2 }} variant="outlined">
                <CardContent>
                  <Typography variant="body1">
                    {renderParagraph()}
                  </Typography>
                </CardContent>
            </Card>

            <Typography align="center" variant="h4" gutterBottom>Outstanding Violations</Typography>
            <Violations violations={violations} onDismiss={handleDismissViolation} onUpdate={handleUpdateViolation} />
        </Container>
    )
}

export default App
