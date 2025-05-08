import styles from "./styles.module.scss";

export default function AddToCartButton({
  style = null,
  ariaLabel = null,
  isMiniButton = false,
  handleClick,
  children,
}) {
  return (
    <>
      <button
        type="button"
        className={`${styles["button"]} ${
          isMiniButton ? styles["button--mini"] : ""
        }`}
        style={style}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}
