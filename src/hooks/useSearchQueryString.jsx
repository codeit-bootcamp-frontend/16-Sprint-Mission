import { useState } from "react";
import { useSearchParams } from "react-router";

export const useSearchQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get("keyword") || "";
  const [inputValue, setInputValue] = useState(searchKeyword);

  const onSearchSubmit = () => {
    setSearchParams(inputValue ? { keyword: inputValue } : {});
  };

  return { inputValue, setInputValue, onSearchSubmit };
};
