import MobileHead from "../../layouts/mobileSideBar/MobileHead";
import styles from "../TopPageComponent.module.scss";
import cn from "classnames";

function ModalWindow({ modalState }: { modalState: boolean }) {
  return (
    <div
      className={cn(styles.modalWindow, {
        [styles.active]: modalState === true,
      })}
    >
      <MobileHead />
    </div>
  );
}

export default ModalWindow;
