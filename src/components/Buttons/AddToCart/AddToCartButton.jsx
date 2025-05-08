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
          <Button
            isMiniButton={true}
            style={{
              "--button-border-color": "var(--clr-white)",
              "--button-border-hover-color": "var(--clr-white)",
              "--button-icon-color": "var(--clr-white)",
              "--button-icon-hover-color": "var(--clr-red)",
            }}
            ariaLabel={"decrease item count"}
            handleClick={decrementCount}
          >
            <MinusIcon />
          </Button>
          <span>{count}</span>
          <Button
            isMiniButton={true}
            style={{
              "--button-border-color": "var(--clr-white)",
              "--button-border-hover-color": "var(--clr-white)",
              "--button-icon-color": "var(--clr-white)",
              "--button-icon-hover-color": "var(--clr-red)",
            }}
            ariaLabel={"increase item count"}
            handleClick={incrementCount}
          >
            <PlusIcon />
          </Button>
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
