import { z } from 'zod';

export const todoSchema = z.string().trim().min(1, '할 일을 입력해주세요.');
