import styles from "./styles.module.scss";

export default function ProductCard(props) {
  return (
    <>
      <article className={styles["product-card"]}>
        <div className={styles["product-card__header"]}>
          <picture className={styles["product-card__image"]}>
            <source srcSet={props.mediumUrl} media="(min-width: 768px)" />
            <source srcSet={props.largeUrl} media="(min-width: 999px)" />
            <img src={props.defaultUrl} alt={props.title} />
          </picture>
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
