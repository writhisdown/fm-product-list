import styles from "./styles.module.scss";

export default function AddToCartButton(props) {
  return (
    <>
      <button type="button" className={styles["button"]}>
        {props.children}
      </button>
    </>
  );
}
