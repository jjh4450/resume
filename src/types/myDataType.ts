interface SectionData {
    title: string;
    company: string;
    period: string;
    duration: string;
    description: string[];
    skills: string[];
}

interface detailData {
    [key: string]: SectionData[];
}