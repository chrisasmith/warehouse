import { ItemsEntity, Links, jobConfig } from "../../interfaces/job-config";

export class JobConfig implements jobConfig {
  constructor(public links: Links, public size: number, public items?: ItemsEntity[]) {}
}
