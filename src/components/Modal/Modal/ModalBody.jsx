import styles from "./styles.module.scss";

export default function ModalBody({children}) {
  return (
    <div className={styles["modal__body"]}>
      {children}
    </div>
  )
}