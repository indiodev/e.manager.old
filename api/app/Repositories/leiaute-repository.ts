import { Create, Leiaute, List } from "App/Dtos/Leiaute";
import { Query } from "App/Dtos/Query";

export interface LeiauteRepository {
  create: (date: Create) => Promise<Leiaute>;
  findBy: <T extends keyof Leiaute>(
    key: T,
    value: Leiaute[T]
  ) => Promise<Leiaute | null>;
  list: (query: Query) => Promise<List>;
}
