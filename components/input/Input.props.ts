import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError, FieldErrors } from "react-hook-form";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
}
