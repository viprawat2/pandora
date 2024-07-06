import { useState, useEffect, useContext } from "react";
import CartContext from "@/context/cart-context";
import styles from "@/styles/ProductForm.module.css";

const ProductForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [inputIsValid, setInputIsValid] = useState(false);
  const { items } = useContext(CartContext);

  useEffect(() => {
    const existingItemIndex = items.findIndex(
      (item) => item.id === props.info.id
    );
    if (existingItemIndex >= 0) {
      const existingamount = items[existingItemIndex].amount;
      setEnteredAmount(existingamount);
    } else {
      setEnteredAmount(0);
    }
  }, [props.info, items]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputIsValid(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputIsValid]);

  const increaseHandler = () => {
    setEnteredAmount((prevState) => prevState + 1);
  };
  const decreaseHandler = () => {
    if (enteredAmount > 0) {
      setEnteredAmount((prevState) => prevState - 1);
    }
  };
  const addToCartHandler = () => {
    if (enteredAmount < 1 || enteredAmount > 10) {
      setInputIsValid(true);
    } else {
      props.onAddToCart(enteredAmount);
    }
  };

  return (
    <div className={styles.form}>
      <p className={styles.story}>{props.info.specs}</p>
      <div className={styles.quant}>
        <p>Quantity</p>
        <div className={styles.btns}>
          <button onClick={decreaseHandler}>-</button>
          <p className={styles.quantity}>{enteredAmount}</p>
          <button onClick={increaseHandler}>+</button>
        </div>
        <p className={styles.price}>{props.info.price}.00$</p>
      </div>
      {inputIsValid && (
        <p className={styles.error}>❌ Please Enter a valid quantity (1-10)</p>
      )}
      <div className={styles.addCart}>
        <button onClick={addToCartHandler} className={styles.addBtn}>
          add to cart
        </button>
        <button className={styles.buyBtn}>buy now</button>
      </div>
    </div>
  );
};
export default ProductForm;
