import styles from "./commentForm.module.scss";
import cn from "classnames";
import { ICommentForm } from "./CommentForm.props";
import Input from "../input/Input";
import { RaitingComponent } from "../rating/RaitingComponent";
import TextArea from "../textarea/TextArea";
import { Button } from "../button/Button";

function CommentForm({ productId, className, ...props }: ICommentForm) {
  return (
    <div className={cn(styles.reviewForm)} {...props}>
      <Input />
      <Input />
      <div>
        <span>Оценка:</span>
        <RaitingComponent rating={0} isEditable></RaitingComponent>
      </div>
      <TextArea />
      <Button appearence="primary">Отправить</Button>
      <div>
        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
      </div>
    </div>
  );
}

export default CommentForm;
