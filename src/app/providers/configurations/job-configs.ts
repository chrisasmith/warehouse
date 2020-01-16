import { jobConfigs, Links, ItemsEntity } from "../../interfaces/job-configs";

export class JobConfigs implements jobConfigs {
  constructor(public links: Links, public size: number, public items?: ItemsEntity[]) {}
}
