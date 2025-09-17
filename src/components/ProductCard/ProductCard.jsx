import styles from "./styles.module.scss";
import FallbackIcon from "../Icons/FallbackIcon";

export default function ProductCard({ item, children }) {
  const {mobile, tablet, desktop} = item.image;
  return (
    <>
      <article id={item.id} className={styles["product-card"]}>
        <div className={styles["product-card__header"]}>
          {desktop || tablet || mobile ? (
            <picture>
              <source srcSet={tablet} media="(min-width: 768px)" />
              <source srcSet={desktop} media="(min-width: 999px)" />
              <img
                src={mobile}
                alt={item.name}
                className={styles["product-card__image"]}
              />
            </picture>
          ) : (
            <div className={styles["fallback-image"]}>
              <FallbackIcon />
            </div>
          )}
          <div className={styles["product-card__actions"]}>
            {children}
          </div>
        </div>
        <div className={styles["product-card__info"]}>
          <span className={styles["product-card__category"]}>
            {item.category}
          </span>
          <h2 className={styles["product-card__title"]}>{item.name}</h2>
          <span className={styles["product-card__price"]}>${item.price.toFixed(2)}</span>
        </div>
      </article>
    </>
  );
}
