import styles from '@styles/ErrMsg.module.css';
import {
  useFormContext,
  useFormState,
  type FieldErrors,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import clsx from 'clsx';
import { z } from 'zod';

export const FormDataSchema = z
  .object({
    'user-email': z
      .string()
      .min(1, '이메일을 입력해주세요')
      .email({ message: '이메일 형식에 맞지 않습니다.' }),
    'user-password': z
      .string()
      .min(1, '비밀번호를 입력해주세요')
      .min(8, '비밀번호를 8자 이상 입력해주세요'),
    'user-name': z.string().min(1, '이름을 입력해주세요'),
    'user-password-check': z.string().min(1, '비밀번호를 다시 입력해주세요.'),
  })
  .refine(
    (formData) => formData['user-password'] === formData['user-password-check'],
    {
      path: ['user-password-check'], //해당 평가를 적용할 필드(프로퍼티 키로 줘야 함)
      message: '비밀번호가 일치하지 않습니다.',
    },
  );

interface Props<T> {
  placeholder: string;
  name: Path<T>;
  type: string;
  id: string;
}

function FormInput<T extends FieldValues>(props: Props<T>) {
  const { placeholder, name, type, id } = props;
  const methods = useFormContext<T>();
  // type InferredT = typeof methods extends UseFormReturn<infer U> ? U : never;
  //InferredT를 통해 useFormState에 인자로 들어가는 name이 유효한 타입인지 (Path<T>에 해당하는지) 정확히 판단하기 위해 사용
  //=> 조드 스키마 넣으면서 VALID_RULES가 사라졌으니
  // 굳이 VALID_RULES의 키와 useForm<T>안에 오는 T의 프로퍼티들의 타입을 맞출 필요x=> 그냥 Path<T>바로 쓰기
  const { errors } = useFormState({ name }); //여기서 name으로 따로 골라와야 개별로 감지

  function getErrorMessage(errors: FieldErrors) {
    const errMsg = errors[name]?.message;
    const result = errMsg && typeof errMsg === 'string' ? errMsg : '';

    return result;
  }

  return (
    <>
      <input
        {...methods.register(name)} //리졸버 등록했으니 2번째 인자로 함수 넣어줄 필요xㄴ
        className={clsx({ [styles.inputErrorBorder]: getErrorMessage(errors) })}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div role="alert" className={styles.errorMessage}>
        {getErrorMessage(errors)}
      </div>
    </>
  );
}

export default FormInput;
