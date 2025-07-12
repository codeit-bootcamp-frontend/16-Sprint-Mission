import * as z from "zod/v4";

export const todoSchema = z.object({
  todo: z.string().trim().nonempty("할 일을 입력해주세요(최소 1글자)"),
});