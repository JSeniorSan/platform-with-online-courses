import { ITextArea } from "./TextArea.props";
import styles from "./textArea.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
const TextArea = forwardRef(
  (
    { className, ...props }: ITextArea,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        placeholder="Текст отзыва"
        className={cn(styles.textarea, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName;
export default TextArea;
