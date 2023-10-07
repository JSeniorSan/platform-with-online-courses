"use client";
import { IInputProps } from "./Input.props";
import styles from "./input.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
const Input = forwardRef(
  (
    { className, ...props }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input className={cn(styles.input, className)} ref={ref} {...props} />
    );
  }
);
Input.displayName = "Input";
export default Input;
