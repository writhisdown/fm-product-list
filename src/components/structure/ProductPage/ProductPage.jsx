import { useState, useCallback } from "react";
import products from "../../../data/products";
import ProductShelf from "../ProductShelf/ProductShelf";
import ProductCard from "../../ProductCard/ProductCard";
import AddToCartButton from "../../Buttons/AddToCart/AddToCartButton";
import Cart from "../../Cart/Cart";
import Modal from "../../Modal/Modal/Modal";
import ModalHeader from "../../Modal/Modal/ModalHeader";
import ModalBody from "../../Modal/Modal/ModalBody";
import Button from "../../Buttons/Button/Button";
import OrderList from "../../OrderList/OrderList";
import OrderTotal from "../../OrderTotal/OrderTotal";
import styles from "./styles.module.scss";

const productList = products.map((product) => {
  return (
    {
      ...product, 
      id: crypto.randomUUID(),
    }
  )
})

console.log(productList);

export default function ProductPage() {
  const [cartContents, setCartContents] = useState([]);
  const [orderTotal, setOrderTotal] = useState({});

  // set open / close state for modal
  const [openModal, setOpenModal] = useState(false);

  function populateCart(selected) {
    const selectedItems = productList.filter((item) => item.id === selected);
    console.log(selectedItems);

    const nextItems = [...cartContents, ...selectedItems];

    setCartContents(nextItems);

    console.log('cart items:', nextItems);
  }

  function updateProducts(selected, value) {
    const nextItems = cartContents.map((item) => {
      console.log(item.id);
      console.log(item.price);
      return item.id === selected ? {
          ...item,
          count: value,
          totalPrice: item.price * value,
        } : item
    });

    setCartContents(nextItems);
    console.log('next items:', nextItems);

    getTotals(nextItems);
  }

  function getTotals(items) {
    const totalCount = items.map((item) => item.count)
      .reduce((acc, val) => acc + val, 0);

    const totalPrice = items.map((item) => item.totalPrice)
      .reduce((acc, val) => acc + val, 0);

    console.log('count tally:', totalCount);
    console.log('price tally:', totalPrice);

    setOrderTotal({
      count: totalCount,
      price: totalPrice,
    });
  }
  
  // TODO: Remove outdated logic
  // reset active button state to false to remove item from cart
  // then subtract the current count from itself to reflect the correct
  // cart count
  // const removeItem = (id) => {
  //   setActiveButton((prevProduct) => ({
  //     ...prevProduct,
  //     [id]: false,
  //   }));

  //   setCount((prevCount) => ({
  //     ...prevCount,
  //     [id]: prevCount[id] - prevCount[id],
  //   }));
  //   console.log("item to removeItem:", id);
  // };

  // const clearItems = () => {
  //   cartItems.forEach((item) => removeItem(item.id));
  // }

  // TODO: Move / refactor modal related logic over to modal component if possible
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  // const resetCart = () => {
  //   clearItems();
  //   handleClose();
  // }

  // reset dialog state to close when ESC key is used to exit the modal
  const handleEscape = (event) => {
    console.log("event:", event);
    console.log("event key:", event.key);
    console.log("is open:", openModal);
    if (event.key === "Escape") {
      // dialogElement?.close();
      // return !isOpen;
      handleClose();
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.nodeName === 'DIALOG') {
      handleClose();
    }
  }

  return (
    <>
      <section className={styles["product-page"]}>
        <div>
          <h1 className={styles["product-page__title"]}>Desserts</h1>
          <ProductShelf>
            {productList.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard
                    item={product}
                  >
                    <AddToCartButton
                      item={product}
                      populateCart={populateCart}
                      updateProducts={updateProducts}
                    />
                  </ProductCard>
                </li>
              );
            })}
          </ProductShelf>
        </div>
        <Cart
          items={cartContents}
          total={orderTotal}
          // TODO: refactor remove single item logic
          // handleRemove={removeItem}
          handleModal={handleOpen}
        />
      </section>
      {/* TODO: Refactor modal */}
      <Modal 
        isOpen={openModal} 
        handleEscape={handleEscape}
        handleOutsideClick={handleOutsideClick}
      >
        <ModalHeader 
          confirmationIcon={true}
          modalTitle="Order Confirmed" 
          modalMessage="We hope you enjoy your food!"
        />
        <ModalBody>
          <ul>
            {cartContents.map((item) => {
              const {thumbnail} = item.image;
              return (
                <OrderList
                  key={item.id}
                  item={item}
                  hasThumbnail={thumbnail}
                />
              );
            })}
          </ul>
          <OrderTotal total={orderTotal.price} />
        </ModalBody>
        <Button
          style={{
            "--button-bg-color": "var(--clr-red)",
            "--button-text-color": "var(--clr-white)",
            "--button-width": "100%",
            "--button-inline-position": "center",
            "--button-text-hover-color": "var(--clr-white)",
            "--button-bg-hover-color": "var(--clr-red-100)",
            "--button-font-size": "var(--text-body)",
          }}
          // handleClick={resetCart}
        >
          Start New Order
        </Button>
      </Modal>
    </>
  );
}
