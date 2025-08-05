import { create } from "zustand";
import { validateInput } from "../utils/formValidation";

interface LoginState {
  email: {
    value: string;
    validInfo: {
      isValid: boolean | null;
      message: string;
    };
  };
  password: {
    value: string;
    validInfo: {
      isValid: boolean | null;
      message: string;
    };
  };
  setField: (name: "email" | "password", value: string) => void;
  validateField: (name: "email" | "password", ...value: [string]) => void;
  resetFields: () => void;
}

const useLoginStore = create<LoginState>((set) => ({
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

export default useLoginStore;
