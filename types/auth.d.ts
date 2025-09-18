import { LoginFormValues, SignUpValues } from "./form";

export type AuthReqBody = LoginFormValues | SignUpValues;

export interface AuthReqError {
  status: number;
  message: string;
}
