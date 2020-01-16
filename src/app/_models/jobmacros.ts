export interface JobMacros {
    items: Item[];
    links: Links;
    size:  number;
}

export interface Item {
    name:   string;
    value:  string;
    secure: boolean;
}

export interface Links {
    prev: string;
    next: string;
}
