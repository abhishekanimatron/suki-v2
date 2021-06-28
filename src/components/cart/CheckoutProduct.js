import { Link } from "react-router-dom";
import { useState } from "react";

import { addToBasket, removeFromBasket } from "../../slices/basketSlice";
import { useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function CheckoutProduct({ id, productImage, price, title }) {
  const dispatch = useDispatch();

  // if counter if less than 5, (max. quantity) add it to basket and increment counter
  const addItemToBasket = () => {
    if (counter < 5) {
      incrementQuantity();
      const product = { id, title, productImage, price };
      dispatch(addToBasket(product));
    }
  };

  // if counter if greater than 1, remove it from basket and decrement counter
  const removeItemFromBasket = () => {
    if (counter > 1) {
      decrementQuantity();
    }
    dispatch(removeFromBasket({ id }));
  };

  const [counter, setCounter] = useState(1);

  // Function is called everytime increment button is clicked
  const incrementQuantity = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const decrementQuantity = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <tr>
      <td className="img">
        <Link to={`/product/${id}`}>
          <img src={productImage} alt={title} />
        </Link>
      </td>
      <td>
        <div className="desc">
          <Link
            className="product-title-info"
            to={`/product/${id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <h5>{title}</h5>
          </Link>

          <h6 className="product-property">S</h6>
        </div>
        <p onClick={removeItemFromBasket} className="remove-btn">
          REMOVE
        </p>
      </td>
      <td className="item-price">$ {price} USD</td>
      <td className="quantity">
        <div id="quantity-selector">
          <span onClick={removeItemFromBasket} id="quantity-minus">
            <RemoveIcon />
          </span>
          <div id="quantity-item">{counter}</div>
          <span onClick={addItemToBasket} id="quantity-plus">
            <AddIcon />
          </span>
        </div>
      </td>
    </tr>
  );
}

export default CheckoutProduct;
