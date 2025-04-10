import { FC } from "react";
import { Violation } from "../../types";

const severityClassMap: Record<Violation["severity"], string> = {
    low: "rgba(255, 255, 0, 0.8)",
    medium: "rgba(255, 165, 0, 0.8)",
    high: "rgba(255, 0, 0, 0.8)",
};

type Props = {
    violation: Violation;
};

const ViolationHighlightText: FC<Props> = ({ violation }) => {
    return (
        <mark
          id={violation.id}
          style={{ 
            backgroundColor: severityClassMap[violation.severity],
            borderRadius: '5px',
            padding: '0 5px',
          }}
        >
            {violation.text}
        </mark>
    );
}

export default ViolationHighlightText;