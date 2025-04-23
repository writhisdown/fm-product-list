import styles from "./styles.module.scss";
import ProductPage from "../ProductPage/ProductPage";

export default function MainContent() {
  return (
    <>
      <section className={styles.content}>
        <ProductPage />
      </section>
    </>
  );
}
