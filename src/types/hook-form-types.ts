import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";

// Define the type for your context value

 type FormregisterType = ReturnType<typeof useForm>['register'];
 type FormerrorsType = ReturnType<typeof useForm>['formState']['errors'];
 type FormhandleSubmitType = ReturnType<typeof useForm>['handleSubmit'];
 
  
export type {FormerrorsType, FormhandleSubmitType, FormregisterType};