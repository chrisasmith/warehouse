
export interface Configurations {
    jobTemplateId: string;
    name: string;
    schedule: string;
    runtimeConfig: RuntimeConfig;
    timeout: number;
    active: boolean;
    description: string;
}

export interface RuntimeConfig {
    logLevel: string;
    packageName: string;
    macros: Macro[];
    entryPoint: string;
    packagePrefix: string;
    packageArtifactOverride: boolean;
}

export interface Macro {
    value: string;
    key: string;
    secure: boolean;
}
