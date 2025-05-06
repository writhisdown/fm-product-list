import {useEffect, useState} from "react";
import Button from "../../Buttons/Button/Button";
import styles from "./styles.module.scss";
import EmptyCartIcon from "../../Icons/EmptyCartIcon";
import CarbonTreeIcon from "../../Icons/CarbonTree";

export default function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceArray = [];
  useEffect(() => {
    const total = totalPriceArray.reduce((acc, currVal) => acc + currVal, 0);
    setTotalPrice(total);
  }, [totalPriceArray, totalPrice]);

  return (
    <>
      <div className={styles["cart"]}>
        <div className={styles["cart__heading"]}>
          <h3>Your Cart</h3>
          <span>{`(${props.cartTotal})`}</span>
        </div>
        {props.isEmptyCart ? (
          <>
            <div className={styles["cart__placeholder-img"]}>
              <span className="screen-reader-text">Cart is empty</span>
              <EmptyCartIcon />
            </div>
            <span className={styles["cart__placeholder-message"]}>
              Your added items will appear here
            </span>
          </>
        ) : (
          <>
            <ul className={styles["cart__list"]}>
              {props.cartItems.map((item) => {
                const countObject = props.itemCount.find(
                  (selected) => selected.id == item.id
                );
                const currentCount = countObject ? countObject.count : "";
                const itemPrice = item.price;
                const itemTotal = itemPrice * currentCount;

                totalPriceArray.push(itemTotal);

                // const cartTotal = () => totalPriceArray.push(itemTotal);
                // cartTotal();

                console.log("current count", countObject);

                console.log("item total:", itemTotal);

                console.log("array count", totalPriceArray);

                console.log("price total:", totalPrice);

                return (
                  <li className={styles["cart__item"]}>
                    <div className={styles["cart__item-details"]}>
                      <h3 className={styles["cart__item-name"]}>{item.name}</h3>
                      <span className={styles["cart__item-count"]}>
                        {currentCount}x
                      </span>
                      <span className={styles["cart__item-price"]}>
                        @ ${itemPrice.toFixed(2)}
                      </span>
                      <span className={styles["cart__item-total"]}>
                        ${itemTotal.toFixed(2)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles["cart__footer"]}>
              <dl className={styles["cart__order-total"]}>
                <dt>Order Total</dt>
                <dd>${totalPrice.toFixed(2)}</dd>
              </dl>
              <div className={styles["cart__legal-container"]}>
                <div className={styles["cart__legal"]}>
                  <CarbonTreeIcon />
                  <p>
                    This is a <span>carbon-neutral</span> delivery
                  </p>
                </div>
              </div>
              <Button
                style={{
                  "--button-bg-color": "var(--clr-red)",
                  "--button-text-color": "var(--clr-white)",
                  "--button-width": "100%",
                  "--button-inline-position": "center",
                  "--button-text-hover-color": "var(--clr-white)",
                  "--button-bg-hover-color": "var(--clr-red-100)",
                  "--button-font-size": "var(--text-body)",
                }}
              >
                Confirm Order
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
