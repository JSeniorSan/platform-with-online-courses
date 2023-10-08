"use client";
import styles from "./commentForm.module.scss";
import cn from "classnames";
import { ICommentForm, IFormData } from "./CommentForm.props";
import Input from "../input/Input";
import { RaitingComponent } from "../rating/RaitingComponent";
import TextArea from "../textarea/TextArea";
import { Button } from "../button/Button";
import Close from "../ui/Close";
import { useForm, Controller } from "react-hook-form";
import { IReviewCard } from "./Review.interface";
import axios from "axios";
import { API } from "../../helpers/API";
import { useState } from "react";
function CommentForm({ productId, className, ...props }: ICommentForm) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewCard>();

  const [isSend, setIsSend] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();
  const [err, setErr] = useState<boolean>(false);
  const onSubmit = async (formData: IReviewCard) => {
    try {
      const { data } = await axios.post<IFormData>(API.postFormData.sendURL, {
        ...formData,
        productId,
      });
      if (data.message) {
        setIsSend(true);
        reset();
      } else {
        setIsError("Что-то пошло не так");
      }
    } catch (err) {
      if (err instanceof Error) setIsError(err.message);
      setErr(true);
    }
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
        {...register("name", {
          required: { value: true, message: "Заполните имя" },
        })}
        error={errors.name}
      />
      <Input
        className={styles.inputTitle}
        placeholder="Заголовок отзыва"
        {...register("title", {
          required: { value: true, message: "Заполните поле описания" },
        })}
        error={errors.title}
      />
      <div className={styles.ratingBox}>
        <span className={styles.ratingTitle}>Оценка:</span>
        <Controller
          name="rating"
          control={control}
          rules={{ required: { value: true, message: "Выберите" } }}
          render={({ field }) => (
            <RaitingComponent
              error={errors.rating}
              rating={field.value}
              setRating={field.onChange}
              isEditable
              ref={field.ref}
              className={styles.rating}
            />
          )}
        />
      </div>
      <TextArea
        className={styles.textarea}
        {...register("description", {
          required: { value: true, message: "Введите ваш отзыв" },
        })}
        error={errors.description}
      />
      <div className={styles.btnBox}>
        <Button appearence="primary" className={styles.btn}>
          Отправить
        </Button>
        <div className={styles.textMark}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </div>
      </div>
      {isSend && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.send}>Ваш отзыв отправлен</div>
          <div className={styles.thx}>
            Спасибо, ваш отзыв будет опубликован после проверки.
          </div>
          <Close onClick={() => setIsSend(false)} />
        </div>
      )}
      {err && (
        <div className={cn(styles.errorBox, styles.panel)}>
          <div className={styles.errMessage}>
            Что-то пошло не так, попробуйте обновить браузер...
          </div>
          <Close className={styles.close} onClick={() => setErr(false)} />
        </div>
      )}
    </form>
  );
}

export default CommentForm;
