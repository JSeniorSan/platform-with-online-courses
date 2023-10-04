import { ITextArea } from "./TextArea.props";
import styles from "./textArea.module.scss";
import cn from "classnames";

function TextArea({ className, ...props }: ITextArea) {
  return (
    <textarea
      placeholder="Текст отзыва"
      className={cn(styles.textarea, className)}
      {...props}
    />
  );
}

export default TextArea;
