export interface jobConfig {
  items?: (ItemsEntity)[] | null;
  links: Links;
  size: number;
}
export interface ItemsEntity {
  nextFireTime: string;
  runtimeConfig: RuntimeConfig;
  description: string;
  createdByUser: CreatedByUserOrTemplateOrLastModifiedByUserOrUser;
  created: string;
  lastModified: string;
  schedule: string;
  favorite: boolean;
  template: CreatedByUserOrTemplateOrLastModifiedByUserOrUser;
  lastModifiedByUser: CreatedByUserOrTemplateOrLastModifiedByUserOrUser;
  href: string;
  user: CreatedByUserOrTemplateOrLastModifiedByUserOrUser;
  timeout: number;
  active: boolean;
  id: string;
  name: string;
}
export interface RuntimeConfig {
  logLevel: string;
  packageName: string;
  macros?: (MacrosEntity)[] | null;
  entryPoint: string;
  packagePrefix: string;
  packageArtifactOverride: boolean;
}
export interface MacrosEntity {
  value: string;
  key: string;
  secure: boolean;
}
export interface CreatedByUserOrTemplateOrLastModifiedByUserOrUser {
  id: number;
  name: string;
}
export interface Links {
  prev: string;
  next: string;
}
