import {useState} from "react";
import styles from "./styles.module.scss";
import FallbackIcon from "../Icons/FallbackIcon";
import AddToCartButton from "../Buttons/AddToCart/AddToCartButton";

export default function ProductCard(props) {
  const [isActive, setActive] = useState(false);
  const [count, setCount] = useState(0);

  const initializeButton = () => {
    setActive(true);
    setCount((prevCount) => prevCount + 1);
    // console.log("state updated");
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("clicked +");
    console.log("the count", count);
  };

  const decrementCount = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        setActive(false);
      }

      return prevCount - 1;
    });

    console.log("the count", count);
    console.log("clicked -");
  };

  return (
    <>
      <article className={styles["product-card"]}>
        <div className={styles["product-card__header"]}>
          {props.largeUrl || props.mediumUrl || props.defaultUrl ? (
            <picture>
              <source srcSet={props.mediumUrl} media="(min-width: 768px)" />
              <source srcSet={props.largeUrl} media="(min-width: 999px)" />
              <img
                src={props.defaultUrl}
                alt={props.title}
                className={styles["product-card__image"]}
              />
            </picture>
          ) : (
            <div className={styles["fallback-image"]}>
              <FallbackIcon />
            </div>
          )}
          <div className={styles["product-card__actions"]}>
            <AddToCartButton
              isActive={isActive}
              count={count}
              initializeButton={initializeButton}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
          </div>
        </div>
        <div className={styles["product-card__info"]}>
          <span className={styles["product-card__category"]}>
            {props.category}
          </span>
          <h3 className={styles["product-card__title"]}>{props.title}</h3>
          <span className={styles["product-card__price"]}>${props.price}</span>
        </div>
      </article>
    </>
  );
}
