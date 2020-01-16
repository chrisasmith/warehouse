export interface User {
  username: string;
  account: Account;
  createdByUser: Account;
  created: string;
  admin: boolean;
  lastModified: string;
  lastModifiedByUser: Account;
  href: string;
  externalId: string;
  active: boolean;
  id: string;
  token?: string;
}

export interface Account {
  id: number;
  name: string;
}
