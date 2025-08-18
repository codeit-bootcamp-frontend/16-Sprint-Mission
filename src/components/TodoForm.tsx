import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';

import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import { todoSchema } from '@/lib/schemas';

const TodoSchema = z.object({
  name: todoSchema,
});

type TodoData = z.infer<typeof TodoSchema>;

interface TodoFormProps {
  onSubmit: (data: TodoData, reset: () => void) => void;
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const methods = useForm<TodoData>({
    resolver: zodResolver(TodoSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = methods;

  const onClickSubmit = (data: TodoData) => {
    onSubmit(data, reset);
  };

  return (
    <header>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onClickSubmit)} className='w-full flex items-start gap-4'>
          <FormInput name='name' placeholder='할 일을 입력해주세요' className='' />
          <Button disabled={!isValid}>추가하기</Button>
        </form>
      </FormProvider>
    </header>
  );
};

export default TodoForm;
