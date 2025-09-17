import Button from "../Buttons/Button/Button"
import styles from "./styles.module.scss";
import CloseIcon from "../Icons/CloseIcon";

export default function OrderList({item, hasThumbnail = false, actions, handleClick}) {
  return (
    <li className={styles["product-list-item"]}>
      {hasThumbnail && (
        <div className={styles["product-list-item__thumbnail"]}>
          <img
            src={hasThumbnail}
            alt={item.name}
          />
        </div>
      )}
      <div className={`${styles["product-list-item__details"]} ${styles["product-list-item__details--fill-space"]}`}>
        <h3 className={styles["product-list-item__details-name"]}>{item.name}</h3>
        <span className={styles["product-list-item__details-count"]}>
          {item.count}x
        </span>
        <span className={styles["product-list-item__details-price"]}>
          @ ${item.price.toFixed(2)}
        </span>
        {actions && (
          <span className={`${styles["product-list-item__details-total"]} ${styles["product-list-item__details-total--inline"]}`}>
            ${item.totalPrice ? item.totalPrice.toFixed(2) : 0}
          </span>
        )}
      </div>
      {!actions ? (
        <span className={styles["product-list-item__details-total"]}>
          ${item.totalPrice ? item.totalPrice.toFixed(2) : 0}
        </span>
      ) : (
        <Button
          isMiniButton={true}
          style={{
            "--button-border-width": "2px",
            "--button-border-hover-width": "2px",
            "--button-border-color": "var(--clr-rose-400)",
            "--button-border-hover-color": "var(--clr-rose-900)",
            "--button-icon-color": "var(--clr-rose-400)",
            "--button-icon-hover-color": "var(--clr-rose-900)",
          }}
          ariaLabel={"remove item"}
          // handleClick={() => handleRemove(item.id)}
          handleClick={handleClick}
        >
          <CloseIcon />
        </Button>
      )}
    </li>
  );
}