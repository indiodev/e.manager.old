import { Base } from "./Base";
import { Meta } from "./Meta";

export interface Collumn extends Base {
  entity_id?: string;
  name: string;
  prefix: string;
  active: boolean;
  type: string;
  value?: string | number;
}

export type Create = Omit<Collumn, "id" | "created_at" | "updated_at">;

export type List = {
  meta: Meta;
  data: Collumn[];
};
