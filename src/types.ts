export interface Violation {
    id: string;
    text: string;
    start: number;
    end: number;
    length: number;
    type: string;
    message: string;
    severity: "low" | "medium" | "high";
    offset?: number;
}

export type Suggestions = Record<string, string[]>;