import { ValidResultType } from "types/authType";

export function getIsAllValid(valueValids: ValidResultType[]) {
  return valueValids.every((valid) => valid.isValid);
}
