import { useEffect, useState } from "react";

const useAllValid = (valueValids) => {
  const [isAllValid, setIsAllValid] = useState(false);

  useEffect(() => {
    // auth 관련 페이지에서만 검증 요소가 전부 true인지 확인
    const allValid = Object.keys(valueValids).every((valid) => {
      return valueValids[valid].isValid;
    });
    setIsAllValid(allValid);
  }, [valueValids]);

  return isAllValid;
};

export default useAllValid;
