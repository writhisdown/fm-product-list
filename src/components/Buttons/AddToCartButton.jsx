import styles from "./styles.module.scss";

export default function AddToCartButton(props) {
  return (
    <>
      <button type="button" className={styles["add-to-cart"]}>
        {props.children}
      </button>
    </>
  );
}
