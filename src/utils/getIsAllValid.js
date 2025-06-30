export function getIsAllValid(valueValids) {
  return valueValids.every((valid) => valid.isValid);
}
