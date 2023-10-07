"use client";
import styles from "./commentForm.module.scss";
import cn from "classnames";
import { ICommentForm } from "./CommentForm.props";
import Input from "../input/Input";
import { RaitingComponent } from "../rating/RaitingComponent";
import TextArea from "../textarea/TextArea";
import { Button } from "../button/Button";
import Close from "../ui/Close";
import { useForm, Controller } from "react-hook-form";
import { IReviewCard } from "./Review.interface";

function CommentForm({ productId, className, ...props }: ICommentForm) {
  const { control, register, handleSubmit } = useForm<IReviewCard>();
  const onSubmit = (data: IReviewCard) => {
    console.log(data);
  };

  return (
    <form
      className={cn(styles.reviewForm)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Input
        className={styles.inputName}
        placeholder="Имя"
        {...register("name")}
      />
      <Input
        className={styles.inputTitle}
        placeholder="Заголовок отзыва"
        {...register("title")}
      />
      <div className={styles.ratingBox}>
        <span className={styles.ratingTitle}>Оценка:</span>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <RaitingComponent
              rating={field.value}
              setRating={field.onChange}
              isEditable
              ref={field.ref}
              className={styles.rating}
            />
          )}
        />
      </div>
      <TextArea className={styles.textarea} {...register("description")} />
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
    </form>
  );
}

export default CommentForm;
