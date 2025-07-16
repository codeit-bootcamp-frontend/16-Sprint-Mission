import { create } from "zustand";
import { validateInput } from "../utils/formValidation";
import { AuthState } from "../types/auth";

const useAuthStore = create<AuthState>((set, get) => ({
  email: {
    value: "",
    validInfo: { isValid: null, message: "" },
  },
  password: {
    value: "",
    validInfo: { isValid: null, message: "" },
  },
  passwordCheck: {
    value: "",
    validInfo: { isValid: null, message: "" },
  },
  nickname: {
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
  resetFields: () =>
    set({
      email: { value: "", validInfo: { isValid: null, message: "" } },
      password: { value: "", validInfo: { isValid: null, message: "" } },
    }),
}));

export default useAuthStore;
