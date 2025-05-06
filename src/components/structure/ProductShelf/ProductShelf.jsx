import styles from "./styles.module.scss";

export default function ProductShelf(props) {
  return (
    <>
      <ul className={styles["product-grid"]}>{props.children}</ul>
    </>
  );
}
