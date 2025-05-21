import CheckCircleIcon from "../../Icons/CheckCircle";
import styles from "./styles.module.scss";

export default function ModalHeader({modalTitle, modalMessage, confirmationIcon}) {
  return (
    <div className={styles["modal__header"]}>
      {confirmationIcon && (
        <div className={styles["modal__header-icon"]}>
          <CheckCircleIcon/>
        </div>
      )}
      <h1>{modalTitle}</h1>
      <p>{modalMessage}</p>
    </div>
  )
}