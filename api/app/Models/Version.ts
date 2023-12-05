import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Version extends Base {
  @column()
  public prefix: string;

  @column()
  public description: string;
}
