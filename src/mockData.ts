import { Suggestions, Violation } from "./types"

export const paragraph = "Our proprietary investment algorithm is designed by top-tier analysts and uses cutting-edge machine learning. It guarantees consistent returns of up to 20% annually. We’ve helped hundreds of investors beat the market and build generational wealth. Contact us today to learn how we can make you our next success story."

// NOTE: I made some small updates to things such as start and end indexes since they did not match the provided string as expected.
export const violations: Violation[] = [
    {
        id: "v1",
        text: "guarantees consistent returns of up to 20% annually",
        start: 113,
        end: 164,
        length: 51,
        type: "Guaranteed Returns",
        message: "Avoid implying guaranteed or predictable returns.",
        severity: "high",
    },
    {
        id: "v2",
        text: "beat the market and build generational wealth",
        start: 201,
        end: 246,
        length: 45,
        type: "Promissory Language",
        message: "Avoid promising outperformance or guaranteed success.",
        severity: "medium",
    },
    {
        id: "v3",
        text: "make you our next success story",
        start: 285,
        end: 316,
        length: 31,
        type: "Testimonials",
        message: "Avoid vague success testimonials without disclosures.",
        severity: "low",
    },
];

export const suggestions: Suggestions = {
    v1: [
        "has historically delivered returns of up to 20% annually, though past performance is not indicative of future results",
        "aims to achieve strong annual returns, with some investors seeing gains as high as 20% in certain years",
        "leverages advanced modeling to pursue returns that, in past performance, have reached up to 20% annually",
    ],
    v2: [
        "strive for long-term growth and financial resilience",
        "help investors pursue their financial goals with confidence",
        "support informed investing strategies aimed at building lasting value",
    ],
    v3: [
        "discuss how our approach might align with your financial goals",
        "explore whether our strategy is a good fit for your needs",
        "see how our methodology could support your investment journey",
    ],
};