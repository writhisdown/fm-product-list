import {useEffect, useRef} from "react";
import styles from "./styles.module.scss";

export default function Modal({isOpen, handleEscape, children}) {
  const dialogRef = useRef();
  const dialogElement = dialogRef.current;

  useEffect(() => {
    if (!dialogElement) return;

    if (isOpen) {
      dialogElement?.showModal();
    } else {
      dialogElement?.close();
    }

    console.log("dialog open:", isOpen);
  }, [isOpen]);

  return (
    <dialog
      className={styles["modal-container"]}
      ref={dialogRef}
      onKeyDown={handleEscape}
    >
      {children}
    </dialog>
  );
}
