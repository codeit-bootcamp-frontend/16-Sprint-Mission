import React from 'react';

import { useFormContext, type FieldValues, type Path } from 'react-hook-form';

import Input from '@/components/Input';

interface FormInputProps<T> {
  placeholder: string;
  name: Path<T>;
  type?: string;
  id?: string;
  className?: string;
}

const FormInput = <T extends FieldValues>({
  placeholder,
  name,
  id,
  className,
}: FormInputProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const errorMessage = (errors[name]?.message as string | undefined) ?? undefined;

  return (
    <Input
      {...register(name)}
      id={id}
      name={name}
      placeholder={placeholder}
      errorMessage={errorMessage}
      className={className}
    />
  );
};

export default FormInput;
