import { useCallback } from "react";
import { useToastStore } from "../store/toast";
import { v4 as uuidv4 } from "uuid";

const useToast = () => {
  const { addToast } = useToastStore();

  const createToast = useCallback(
    (toast) => {
      const id = uuidv4();
      // id, msg, delay
      addToast({ ...toast, id });
    },
    [addToast]
  );

  return { createToast };
};

export default useToast;
