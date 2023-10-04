import { IInputProps } from "./Input.props";
import styles from "./input.module.scss";
import cn from "classnames";

function Input({ className, ...props }: IInputProps) {
  return (
    <input type="text" className={cn(styles.input, className)} {...props} />
  );
}

export default Input;
