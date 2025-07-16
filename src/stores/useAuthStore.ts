import { create } from "zustand";
import { validateInput } from "../utils/formValidation";
import { AuthState } from "../types/auth";

const useAuthStore = create<AuthState>((set) => ({
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
  validateField: (name, ...values) => {
    const { isValid, message } = validateInput(name, ...values);
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
