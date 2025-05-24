import Button from "../Buttons/Button/Button";
import ProductListItem from "../ProductListItem/ProductListItem";
import styles from "./styles.module.scss";
import EmptyCartIcon from "../Icons/EmptyCartIcon";
import CarbonTreeIcon from "../Icons/CarbonTree";

export default function Cart({
  cartTotal,
  isEmptyCart,
  cartItems,
  itemCount,
  handleRemove,
  handleModal,
  children,
}) {
  return (
    <>
      <div className={styles["cart"]}>
        <div className={styles["cart__heading"]}>
          <h3>Your Cart</h3>
          <span>{`(${cartTotal})`}</span>
        </div>
        {isEmptyCart ? (
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
              {cartItems.map((item) => {
                const countObject = itemCount.find(
                  (selected) => selected.id == item.id
                );
                const currentCount = countObject ? countObject.count : "";
                const itemPrice = item.price;
                const itemTotal = itemPrice * currentCount;

                console.log("current count", countObject);

                console.log("item total:", itemTotal);

                return (
                  <ProductListItem
                    productName={item.name}
                    productCount={currentCount}
                    productPrice={itemPrice}
                    productTotal={itemTotal}
                    productAction={true}
                    handleClick={() => handleRemove(item.id)}
                  />
                );
              })}
            </ul>
            <div className={styles["cart__footer"]}>
              {children}
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
          </>
        )}
      </div>
    </>
  );
}
