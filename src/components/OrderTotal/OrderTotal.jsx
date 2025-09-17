import styles from "./styles.module.scss";

export default function OrderTotal({total}) {
  return (
    <dl className={styles["order-total"]}>
      <dt>Order Total</dt>
      <dd>${total ? total.toFixed(2) : 0}</dd>
    </dl>
  )
}