import styles from "./styles.module.scss";
import products from "../../../data/products";
import ProductCard from "../../ProductCard/ProductCard";

export default function ProductShelf() {
  return (
    <>
      <ul className={styles["product-grid"]}>
        {products.map(
          (
            {image: {tablet, desktop, mobile}, name, category, price},
            index
          ) => (
            <li key={index}>
              <ProductCard
                mediumUrl={tablet}
                largeUrl={desktop}
                defaultUrl={mobile}
                title={name}
                category={category}
                price={price.toFixed(2)}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
}
