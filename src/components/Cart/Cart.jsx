import styles from "./styles.module.scss";
import Button from "../Buttons/Button/Button";
import EmptyCartIcon from "../Icons/EmptyCartIcon";
import CarbonTreeIcon from "../Icons/CarbonTree";
import OrderList from "../OrderList/OrderList";
import OrderTotal from "../OrderTotal/OrderTotal";

export default function Cart({
  items,
  total,
  handleRemove,
  handleModal,
}) {
  return (
    <>
      <div className={styles["cart"]}>
        <div className={styles["cart__heading"]}>
          <h3>Your Cart</h3>
          <span>{`(${total.count ? total.count : 0})`}</span>
        </div>
        {items.length === 0 ? (
          <div
            className={`${styles["cart__placeholder"]} ${items.length === 0 ? styles["fade-in"] : ""}`}
          >
            <div className={styles["cart__placeholder-img"]}>
              <span className="screen-reader-text">Cart is empty</span>
              <EmptyCartIcon />
            </div>
            <span className={styles["cart__placeholder-message"]}>
              Your added items will appear here
            </span>
          </div>
        ) : (
          <div
            className={items.length > 0 ? styles["fade-in"] : ""}
          >
            <ul className={styles["cart__list"]}>
              {items.map((item) => {
                return (
                  <OrderList
                    key={item.id}
                    item={item}
                    actions={true}
                    handleClick={() => handleRemove(item.id)}
                  />
                );
              })}
            </ul>
            <div className={styles["cart__footer"]}>
              <OrderTotal total={total.price} />
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
                handleClick={handleModal}
              >
                Confirm Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
