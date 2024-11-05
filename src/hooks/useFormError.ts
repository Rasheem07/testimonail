import { FieldError, FieldErrors, useFormContext } from "react-hook-form";

export const useFormError = (formName: string, name: string) => {
  const { formState: { errors }} = useFormContext();

  // Type assertion for nested errors
  const error = (errors[formName] as FieldErrors)?.[name] as
    | FieldError
    | undefined;

   return error;
}

