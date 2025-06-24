const getIsAllValid = (valueValids) => {
  return valueValids.every((valid) => valid.isValid);
};

export default getIsAllValid;
