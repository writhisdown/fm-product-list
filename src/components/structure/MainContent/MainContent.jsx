import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./styles.module.scss";

export default function MainContent({title}) {
  console.log(title);
  return (
    <>
      <section className={styles.content}>
        <div>
          <h1 className={styles.content__title}>{title}</h1>
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
