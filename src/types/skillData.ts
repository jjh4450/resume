export interface SkillData {
    name: string;
    level?: 1 | 2 | 3;
}

export interface SkillListData {
    [key: string]: SkillData[][];
}

export interface SkillCategoryData {
    category: string;
    skills: SkillData[][];
}