import ProductShelf from "../ProductGrid/ProductShelf";
import ProductGrid from "../ProductGrid/ProductShelf";
import styles from "./styles.module.scss";

export default function MainContent({title}) {
  console.log(title);
  return (
    <>
      <section className={styles.content}>
        <div>
          <h1 className={styles.content__title}>{title}</h1>
          <ProductShelf />
        </div>
      </section>
    </>
  );
}
