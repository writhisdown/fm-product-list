import {useEffect, useRef} from "react";
import { useScrollLock } from "../../../utilities/hooks/useScrollLock";
import styles from "./styles.module.scss";

export default function Modal({isOpen, handleEscape, handleOutsideClick, children}) {
  const {lockScroll, unlockScroll} = useScrollLock();
  const dialogRef = useRef();
  const dialogElement = dialogRef.current;

  useEffect(() => {
    if (!dialogElement) return;

    if (isOpen) {
      dialogElement?.showModal();
      lockScroll();
    } else {
      dialogElement?.close();
      unlockScroll();
    }

    console.log("dialog open:", isOpen);
  }, [isOpen]);

  return (
    <dialog
      className={styles["modal-container"]}
      ref={dialogRef}
      onKeyDown={handleEscape}
      onClick={handleOutsideClick}
    >
      <div className={styles.modal}>
        {children}
      </div>
    </dialog>
  );
}
