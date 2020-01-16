export interface Integrations {
  links: Links;
  items: Item[];
  totalRecords: number;
  pageNumber: number;
  totalPages: number;
  size: number;
}

export interface Item {
  scheduled: string;
  status: string;
  submittedByUser: JobConfig;
  returnCode: string;
  tags: Tag[];
  started: string;
  outMessages: OutMessage[];
  jobConfig: JobConfig;
  currentStep: string;
  jobTemplate: JobConfig;
  finished: string;
  href: string;
  finalDestinationId: string;
  serverId: string;
  id: string;
}

export interface JobConfig {
  id: number;
  name: string;
}

export interface OutMessage {
  body: string;
  href: string;
  name: string;
  properties: Tag[];
}

export interface Tag {
  value: string;
  key: string;
  secure: boolean;
}

export interface Links {
  prev: string;
  next: string;
}
