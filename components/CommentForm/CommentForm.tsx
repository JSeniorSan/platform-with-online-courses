import styles from "./commentForm.module.scss";
import cn from "classnames";
import { ICommentForm } from "./CommentForm.props";
import Input from "../input/Input";
import { RaitingComponent } from "../rating/RaitingComponent";
import TextArea from "../textarea/TextArea";
import { Button } from "../button/Button";
import Close from "../ui/Close";

function CommentForm({ productId, className, ...props }: ICommentForm) {
  return (
    <div className={cn(styles.reviewForm)} {...props}>
      <Input className={styles.inputName} placeholder="Имя" />
      <Input className={styles.inputTitle} placeholder="Заголовок отзыва" />
      <div className={styles.ratingBox}>
        <span className={styles.ratingTitle}>Оценка:</span>
        <RaitingComponent
          rating={0}
          isEditable
          className={styles.rating}
        ></RaitingComponent>
      </div>
      <TextArea className={styles.textarea} />
      <div className={styles.btnBox}>
        <Button appearence="primary" className={styles.btn}>
          Отправить
        </Button>
        <div className={styles.textMark}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.send}>Ваш отзыв отправлен</div>
        <div className={styles.thx}>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <Close />
      </div>
    </div>
  );
}

export default CommentForm;
