import {useState} from "react";
import styles from "./styles.module.scss";
import CartIcon from "../../Icons/CartIcon";
import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";

export default function AddToCartButton() {
  const DefaultButton = () => (
    <button
      type="button"
      className={styles["add-to-cart"]}
      onClick={handleClick}
    >
      <CartIcon />
      <span>Add to Cart</span>
    </button>
  );

  const ActiveButton = () => (
    <div className={`${styles["add-to-cart"]} ${styles.active}`}>
      <button type="button">
        <MinusIcon />
      </button>
      <span>{"Count"}</span>
      <button type="button">
        <PlusIcon />
      </button>
    </div>
  );

  const handleClick = () => {
    setButton(ActiveButton);
    // console.log("state updated");
  };

  const [button, setButton] = useState(DefaultButton);

  return <>{button}</>;
}
