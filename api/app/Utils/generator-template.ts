import { Collumn } from "App/Dtos/Collumn";
import { Entity } from "App/Dtos/Entity";

export function generatorTemplate(json: Record<string, any>, prefix = "") {
  const output: Entity[] = [];

  function mapProperties(obj: Record<string, any>, parentPrefix: string) {
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        const newNode = {
          name: key,
          prefix: key,
          parent: parentPrefix === "" ? null : parentPrefix,
          type: "object",
          active: true,
          collumns: [],
        } as unknown as Entity;

        output.push(newNode);
        mapProperties(value, key);
      } else if (Array.isArray(value)) {
        const arrayNode = {
          name: key,
          prefix: key,
          parent: parentPrefix === "" ? null : parentPrefix,
          type: "array",
          active: true,
          collumns: [],
        } as unknown as Entity;

        output.push(arrayNode);

        if (value.length > 0 && typeof value[0] === "object") {
          mapProperties(value[0], key);
        }
      } else {
        const newNode = {
          name: key,
          prefix: key,
          active: true,
          type: typeof value,
        } as Collumn;

        const parentNode = output.find((node) => node.name === parentPrefix);
        if (parentNode) {
          parentNode.collumns?.push(newNode);
        }
      }
    }
  }

  mapProperties(json, prefix);

  return output.filter((item) => (item?.collumns as Collumn[])?.length > 0);
}
