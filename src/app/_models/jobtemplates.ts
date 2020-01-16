export interface JobTemplates {
    items: Item[];
    links: Links;
    size:  number;
}

export interface Item {
    destination:        Destination;
    remote:             boolean;
    description:        string;
    createdByUser:      User;
    created:            Date;
    lastModified:       Date;
    runtimeConfig:      RuntimeConfig;
    favorite:           boolean;
    lastModifiedByUser: User;
    href:               string;
    user:               User;
    active:             boolean;
    id:                 string;
    name:               string;
}

export interface User {
    id:   number;
    name: string;
}

export interface Destination {
    id:   string;
    name: string;
}

export interface RuntimeConfig {
    logLevel:                string;
    packageName:             string;
    macros:                  Macro[];
    entryPoint:              string;
    packagePrefix:           string;
    packageArtifactOverride: boolean;
}

export interface Macro {
    value:  string;
    key:    string;
    secure: boolean;
}

export interface Links {
    prev: string;
    next: string;
}
