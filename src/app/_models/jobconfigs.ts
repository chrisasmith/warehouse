export interface JobConfigs {
  items: Item[];
  links: Links;
  size: number;
}

export interface Item {
  nextFireTime: Date;
  runtimeConfig: RuntimeConfig;
  description: string;
  createdByUser: CreatedByUser;
  created: Date;
  lastModified: Date;
  schedule: string;
  favorite: boolean;
  template: CreatedByUser;
  lastModifiedByUser: CreatedByUser;
  href: string;
  user: CreatedByUser;
  timeout: number;
  active: boolean;
  id: string;
  name: string;
}

export interface CreatedByUser {
  id: number;
  name: string;
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

export interface Links {
  prev: string;
  next: string;
}
