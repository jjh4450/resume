export interface ContactData {
    icon: string;
    text: string;
    link?: string;
}

export interface HeaderData {
    name: string;
    title?: string;
    contacts: ContactData[];
}