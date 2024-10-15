import React from "react";

export interface SectionData {
    title: string;
    company: string;
    period: string;
    duration: string;
    description: string[] | Exclude<React.ReactNode, null | undefined>[];
    skills: string[];
}

export interface detailData {
    [key: string]: SectionData[];
}