import { create } from "zustand";
import { validateInput } from "../utils/formValidation";

interface SignupState {
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
  passwordCheck: {
    value: string;
    validInfo: {
      isValid: boolean | null;
      message: string;
    };
  };
  nickname: {
    value: string;
    validInfo: {
      isValid: boolean | null;
      message: string;
    };
  };
  setField: (
    name: "email" | "password" | "passwordCheck" | "nickname",
    value: string
  ) => void;
  validateField: (
    name: "email" | "password" | "passwordCheck" | "nickname",
    ...value: [string] | [string, string]
  ) => void;
  resetFields: () => void;
}

const useSignupStore = create<SignupState>((set) => ({
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

export default useSignupStore;
