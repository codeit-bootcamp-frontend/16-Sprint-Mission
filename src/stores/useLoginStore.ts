import { create } from "zustand";
import { validateInput } from "../utils/formValidation";
import { LoginState } from "../types/login";

const useLoginStore = create<LoginState>((set, get) => ({
  email: {
    value: "",
    validInfo: { isValid: null, message: "" },
  },
  password: {
    value: "",
    validInfo: { isValid: null, message: "" },
  },
  setField: (name, value) =>
    set((state) => ({
      [name]: { ...state[name], value },
    })),
  validateField: (name, value) => {
    const { isValid, message } = validateInput(name, value);
    set((state) => ({
      [name]: {
        ...state[name],
        validInfo: {
          isValid,
          message,
        },
      },
    }));
  },
}));

export default useLoginStore;
