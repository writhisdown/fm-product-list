import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function OrderTotal({currentCost}) {
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const total = currentCost.reduce((acc, currVal) => acc + currVal, 0);
    setTotalCost(total);
  }, [currentCost]);

  return (
    <dl className={styles["order-total"]}>
      <dt>Order Total</dt>
      <dd>${totalCost.toFixed(2)}</dd>
    </dl>
  )
}