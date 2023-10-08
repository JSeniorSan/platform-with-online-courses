"use client";
import { IInputProps } from "./Input.props";
import styles from "./input.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
const Input = forwardRef(
  (
    { className, error, ...props }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <input
          className={cn(styles.input, className, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
