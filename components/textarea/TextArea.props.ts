import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { Field, FieldError } from "react-hook-form";

export interface ITextArea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
}
