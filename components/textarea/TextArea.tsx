import { ITextArea } from "./TextArea.props";
import styles from "./textArea.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
const TextArea = forwardRef(
  (
    { className, error, ...props }: ITextArea,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className={cn(styles.wrapper, className)}>
        <textarea
          placeholder="Текст отзыва"
          className={cn(styles.textarea, {
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
TextArea.displayName;
export default TextArea;
