import {useState, useContext} from "react";
import {ProductContext} from "../../../context/ProductContext";
import products from "../../../data/products";
import ProductCard from "../../ProductCard/ProductCard";
import AddToCartButton from "../../Buttons/AddToCart/AddToCartButton";
import styles from "./styles.module.scss";

export default function ProductShelf() {
  // capture data of currently selected product
  const {setActiveProduct} = useContext(ProductContext);
  // handle state for rendering default button and add to cart button
  // set initial state as empty object to handle multiple button clicks
  const [activeButton, setActiveButton] = useState({});
  // handle state for add to cart count
  const [count, setCount] = useState({}); // set initial state as empty object

  // render add to cart button with increment & decrement controls
  const initializeButton = (id, product) => {
    // retrieve data from currently selected product
    setActiveProduct(product);

    // to prevent singular useState from triggering all buttons
    // recreate the state object & pass in the product id &
    // previously selected button as key value pairs to keep track
    // of the currently selected button
    // a similar pattern is followed by the increment / decrement handlers
    setActiveButton((prevProduct) => ({
      ...prevProduct,
      [id]: !prevProduct[id],
    }));

    // set initial count to 1
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] = 1),
    }));
    // console.log("product:", product);
  };

  // increment product count when add to cart button is active
  const incrementCount = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1,
    }));
  };

  // decrement product count when add to cart button is active
  const decrementCount = (id) => {
    setCount((prevCount) => {
      // store decremented count by referencing the previous count & the
      // relevant product object's id
      const currentCount = (prevCount[id] || 0) - 1;

      // if the count is 0 or less, change setActiveButton state to false
      // the count cannot be reliably captured outside of the uesState operation
      // therefore updating setActiveButton needs to be handled inside of setCount
      if (currentCount <= 0) {
        setActiveButton((prevProduct) => ({
          ...prevProduct,
          [id]: false,
        }));
      }

      // return the current count & ensure the count cannot
      // decrease below 0
      return {
        ...prevCount,
        [id]: currentCount < 0 ? 0 : currentCount,
      };
    });
  };

  return (
    <>
      <ul className={styles["product-grid"]}>
        {products.map((product) => {
          const {mobile, tablet, desktop} = product.image;
          const {id, name, category, price} = product;
          return (
            <li key={id}>
              <ProductCard
                mediumUrl={tablet}
                largeUrl={desktop}
                defaultUrl={mobile}
                id={id}
                title={name}
                category={category}
                price={price.toFixed(2)}
              >
                <AddToCartButton
                  activeButton={activeButton[id] || false}
                  count={count[id] || 0}
                  initializeButton={() => initializeButton(id, product)}
                  incrementCount={() => incrementCount(id)}
                  decrementCount={() => decrementCount(id)}
                />
              </ProductCard>
            </li>
          );
        })}
      </ul>
    </>
  );
}
