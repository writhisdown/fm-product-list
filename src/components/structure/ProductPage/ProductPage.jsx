// import { ProductProvider } from "../../../context/ProductContext";
// import {ProductContext} from "../../../context/ProductContext";
import {useState, useContext} from "react";
import products from "../../../data/products";
import ProductShelf from "../ProductShelf/ProductShelf";
import ProductCard from "../../ProductCard/ProductCard";
import AddToCartButton from "../../Buttons/AddToCart/AddToCartButton";
import Cart from "../Cart/Cart";
import styles from "./styles.module.scss";

export default function ProductPage() {
  // capture data of currently selected product
  // const {setActiveProduct} = useContext(ProductContext);
  // handle state for rendering default button and add to cart button
  // set initial state as empty object to handle multiple button clicks
  const [activeButton, setActiveButton] = useState({});
  // handle state for add to cart count
  const [count, setCount] = useState({}); // set initial state as empty object

  // render add to cart button with increment & decrement controls
  const initializeButton = (id, product) => {
    // retrieve data from currently selected product
    // setActiveProduct(product);

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

  const filterProducts = Object.keys(activeButton).filter(
    (item, index) => item[index]
  );
  // Check if any values of new activeButtons array return true
  const isSelectedProduct = Object.values(activeButton).includes(true);

  // iterate over products and filter products that match the
  // currently selected add to cart button
  const cartItems = products.filter((item) => activeButton[item.id]);

  // let counterArray = Object.values(count);

  // const counterFilter = counterArray.filter((item, index) => item[index]);

  const getCartTotal = () => {
    const initialCartTotal = 0;
    let countArray = Object.values(count);

    const countFilter = countArray.filter((item, index) => item[index]);

    if (isSelectedProduct) {
      let cartTotal = countArray.reduce(
        (acc, currVal) => acc + currVal,
        initialCartTotal
      );

      console.log("count filter:", countFilter);

      console.log("cart count object:", count);
      console.log("cart count array:", countArray);
      console.log("cart count:", cartTotal);
      console.log("filtered products:", filterProducts);
      // console.log(JSON.stringify(cartItems));
      console.log(cartItems);

      return cartTotal;
    } else {
      return initialCartTotal;
    }
  };

  // create array from count object and filter counts
  // that match the selected button / product
  // then iterate over the filtered items and return
  // the item id and count value to be used by the cart component
  // for rendering the individual item count per each cart item
  let itemCount = Object.entries(count)
    .filter(([id]) => activeButton[id])
    .map(([id, value]) => ({
      id,
      count: value,
    }));

  console.log("item count:", itemCount);

  return (
    <>
      {/* <ProductProvider> */}
      <section className={styles["product-page"]}>
        <div>
          <h1 className={styles["product-page__title"]}>Desserts</h1>
          <ProductShelf>
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
          </ProductShelf>
        </div>
        <Cart
          cartTotal={getCartTotal()}
          isEmptyCart={!isSelectedProduct}
          cartItems={cartItems}
          itemCount={itemCount}
        />
      </section>
      {/* </ProductProvider> */}
    </>
  );
}
