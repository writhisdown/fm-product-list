import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import CartIcon from "../../Icons/CartIcon";
import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";

export default function AddToCartButton({ 
  item,
  populateCart, 
  updateProducts 
}) {
  const initialCount = 0;

  const [selected, setSelected] = useState({
    id: item.id,
    status: 'idle',
  }); 
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (selected.status === 'idle') {
      return;
    }

    updateProducts(selected.id, count);
  }, [count]);

  function handleIdleButton() {
    setSelected({
      ...selected,
      status: 'selected',
    });

    handleIncrement();
    
    populateCart(selected.id);
  }

  function handleIncrement() {
    setCount((currentCount) => {
      const nextCount = currentCount + 1;
      console.log('item count:', nextCount);
      return nextCount;
    });
  }
  
  function handleDecrement() {
    const resetCount = count - 1;
    
    setCount((currentCount) => {
      const nextCount = currentCount - 1;
      console.log('item count:', nextCount);
      return Math.max(nextCount, 0);
    });

    if (resetCount < 1) {
      setSelected({
        ...selected,
        status: 'idle',
      });
    }
  }

  return (
    <>
      {selected.status === 'selected' ? (
        <div className={`${styles["add-to-cart"]} ${styles.active}`}>
          <Button
            isMiniButton={true}
            style={{
              "--button-border-color": "var(--clr-white)",
              "--button-border-hover-color": "var(--clr-white)",
              "--button-icon-color": "var(--clr-white)",
              "--button-icon-hover-color": "var(--clr-red)",
            }}
            ariaLabel={"decrease item count"}
            handleClick={handleDecrement}
          >
            <MinusIcon />
          </Button>
          <span>{count}</span>
          <Button
            isMiniButton={true}
            style={{
              "--button-border-color": "var(--clr-white)",
              "--button-border-hover-color": "var(--clr-white)",
              "--button-icon-color": "var(--clr-white)",
              "--button-icon-hover-color": "var(--clr-red)",
            }}
            ariaLabel={"increase item count"}
            handleClick={handleIncrement}
          >
            <PlusIcon />
          </Button>
        </div>
      ) : (
        <Button handleClick={handleIdleButton}>
          <CartIcon />
          <span>Add to Cart</span>
        </Button>
      )}
    </>
  );
}

// export default memo(AddCartButton);