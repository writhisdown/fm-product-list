import styles from "./styles.module.scss";

export default function AddToCartButton({handleClick, style = null, children}) {
  return (
    <>
      <button
        type="button"
        className={styles["button"]}
        style={style}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}
