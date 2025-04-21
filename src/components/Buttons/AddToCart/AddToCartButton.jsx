import styles from "./styles.module.scss";
import CartIcon from "../../Icons/CartIcon";
import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";

export default function AddToCartButton({
  isActive,
  count,
  initializeButton,
  incrementCount,
  decrementCount,
}) {
  return (
    <>
      {isActive ? (
        <div className={`${styles["add-to-cart"]} ${styles.active}`}>
          <button type="button" onClick={decrementCount}>
            <MinusIcon />
          </button>
          <span>{count}</span>
          <button type="button" onClick={incrementCount}>
            <PlusIcon />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={styles["add-to-cart"]}
          onClick={initializeButton}
        >
          <CartIcon />
          <span>Add to Cart</span>
        </button>
      )}
    </>
  );
}
