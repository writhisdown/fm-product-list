import { ProductProvider } from "../../../context/ProductContext";
import ProductShelf from "../ProductShelf/ProductShelf";
import Cart from "../Cart/Cart";
import styles from "./styles.module.scss";

export default function ProductPage() {
  return (
    <>
      <ProductProvider>
        <section className={styles["product-page"]}>
          <div>
            <h1 className={styles["product-page__title"]}>Desserts</h1>
            <ProductShelf />
          </div>
          <Cart />
        </section>
      </ProductProvider>
    </>
  );
}
