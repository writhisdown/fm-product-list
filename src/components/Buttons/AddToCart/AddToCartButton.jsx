import Button from "../Button/Button";
import styles from "./styles.module.scss";
import CartIcon from "../../Icons/CartIcon";
import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";

export default function AddToCartButton({
  activeButton,
  count,
  initializeButton,
  incrementCount,
  decrementCount,
}) {
  return (
    <>
      {activeButton ? (
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
        <Button handleClick={initializeButton}>
          <CartIcon />
          <span>Add to Cart</span>
        </Button>
      )}
    </>
  );
}
