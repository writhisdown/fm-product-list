import Button from "../Buttons/Button/Button"
import styles from "./styles.module.scss";
import CloseIcon from "../Icons/CloseIcon";

export default function ProductList({productName, productCount, productPrice, productTotal, productThumb = false, productAction, handleClick}) {
  return (
    <li className={styles["product-list-item"]}>
      {productThumb && (
        <div className={styles["product-list-item__thumbnail"]}>
          <img
            src={productThumb}
            alt={productName}
          />
        </div>
      )}
      <div className={`${styles["product-list-item__details"]} ${styles["product-list-item__details--fill-space"]}`}>
        <h3 className={styles["product-list-item__details-name"]}>{productName}</h3>
        <span className={styles["product-list-item__details-count"]}>
          {productCount}x
        </span>
        <span className={styles["product-list-item__details-price"]}>
          @ ${productPrice.toFixed(2)}
        </span>
        {productAction && (
          <span className={`${styles["product-list-item__details-total"]} ${styles["product-list-item__details-total--inline"]}`}>
            ${productTotal.toFixed(2)}
          </span>
        )}
      </div>
      {!productAction ? (
        <span className={styles["product-list-item__details-total"]}>
          ${productTotal.toFixed(2)}
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