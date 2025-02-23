import styles from "./styles.module.scss";
import EmptyCartIcon from "../../Icons/EmptyCartIcon";

export default function Cart(props) {
  return (
    <>
      <div className={styles["cart"]}>
        <div className={styles["cart__heading"]}>
          <h2>Your Cart</h2>
          <span>{"(Count)"}</span>
        </div>
        <div className={styles["cart__content"]}>
          <span className="screen-reader-text">Cart is empty</span>
          <EmptyCartIcon />
        </div>
        <span className={styles["cart__default-message"]}>
          Your added items will appear here
        </span>
      </div>
    </>
  );
}
