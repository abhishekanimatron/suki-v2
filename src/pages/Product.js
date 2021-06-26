import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { homePageProductList } from "../data/data";

import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FollowFooter from "../components/footer/FollowFooter";
import FooterLinks from "../components/footer/FooterLinks";
import styled from "styled-components/macro";

import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

import CheckoutPopup from "../components/cart/popup/CheckoutPopup";
import PopupContent from "../components/cart/popup/PopupContent";

export default function Product() {
  let productId = window.location.href.substr(35).toString();
  let productObject = homePageProductList[productId - 1];
  let relatedItemsSlice = homePageProductList.slice(0, 30);
  let relatedItems = relatedItemsSlice.sort(() => 0.5 - Math.random());
  let recentlyViewedItems = relatedItems.slice(0, 4);

  let title = productObject.title;
  let productImage = productObject.productImage;
  let price = productObject.price;
  let id = productObject.id;

  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);

  const addItemToBasket = () => {
    for (let i = 0; i < counter; i++) {
      // if (counter < 5) {
      //   incrementQuantity();
      // }
      setTrigger(true);
      setTimeout(() => {
        setTrigger(false);
      }, 2000);
      const product = {
        id,
        title,
        productImage,
        price,
      };
      dispatch(addToBasket(product));
    }
  };

  const [counter, setCounter] = useState(1);

  // Function is called everytime increment button is clicked
  const incrementQuantity = () => {
    if (counter < 5) {
      // Counter state is incremented
      setCounter(counter + 1);
    }
  };

  // Function is called everytime decrement button is clicked
  const decrementQuantity = () => {
    if (counter > 1) {
      // Counter state is decremented
      setCounter(counter - 1);
    }
  };

  const mountedRef = useRef(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      mountedRef.current = false;
    };
  }, [productObject]);

  return (
    <>
      <CheckoutPopup trigger={trigger}>
        <PopupContent productImage={productImage} title={title} price={price} />
      </CheckoutPopup>
      <Helmet>
        <title>{productObject.title} - Suki Market</title>
      </Helmet>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        <ProductImage>
          <img src={productObject.productImage} alt={productObject.title} />
        </ProductImage>
        <ShopContent>
          <h2>{productObject.title}</h2>
          <p
            id="price"
            className={`${productObject.price === 0 ? "greyed-out" : null}`}
          >
            ${productObject.price} USD
          </p>
          <label htmlFor="size-select">Size</label>
          <select id="size-selector" name="size-select">
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>2XL</option>
          </select>
          <div id="quantity-selector">
            <span onClick={decrementQuantity} id="quantity-minus">
              <RemoveIcon />
            </span>
            <div id="quantity-item">{counter}</div>
            <span onClick={incrementQuantity} id="quantity-plus">
              <AddIcon />
            </span>
          </div>
          <button
            onClick={addItemToBasket}
            className={`${productObject.price === 0 ? "grey-btn" : null}`}
          >
            {productObject.price === 0 ? "Sold Out" : "Add to Cart"}
          </button>
          {!productObject.price && <button>Email when available</button>}
          <div id="description">
            <p>
              Ultra-oversized sweatshirt with striped rib neckline and cuffs.
              Puffy print detail on chest. Marzia is wearing a Small, Felix is
              wearing a Medium.
            </p>
            <ul>
              <li>
                65% cotton 35% polyester 300 gsm fleece. Trim: 100% cotton. Made
                in Turkey.
              </li>
              <li>
                Care Instructions: Machine wash cold with like colours. No
                bleach. Tumble dry low. Warm Iron.
              </li>
            </ul>
          </div>
          <Link to={ROUTES.HOME}>
            <p href="/">Suki Size Guide</p>
          </Link>
          <hr />
          <div id="social-icons">
            <span id="facebook">
              <FacebookIcon />
              <p>SHARE</p>
            </span>
            <span id="twitter">
              <TwitterIcon />
              <p>TWEET</p>
            </span>
            <span id="pinterest">
              <PinterestIcon />
              <p>PIN IT</p>
            </span>
          </div>
        </ShopContent>
      </Container>
      <RecentContainer>
        <h2>Also Checkout</h2>
        <RecentProducts>
          {recentlyViewedItems.map((product) => (
            <Wrap key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.productImage} alt={product.title} />
              </Link>
              <p>{product.title}</p>
            </Wrap>
          ))}
        </RecentProducts>
      </RecentContainer>
      <FollowFooter />
      <FooterLinks />
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  @media (max-width: 940px) {
    flex-direction: column;
  }
`;
const ProductImage = styled.div`
  max-width: 50%;
  @media (max-width: 940px) {
    max-width: 100%;
  }
  img {
    padding: 3rem;
    max-height: 120vh;
    object-fit: cover;
    width: 100%;
    @media (max-width: 940px) {
      padding: 1rem;
    }
  }
`;

const ShopContent = styled.div`
  @media (max-width: 940px) {
    max-width: 90%;
    padding: 0;
  }
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  max-width: 50%;
  text-align: center;
  height: 100%;
  text-align: left;
  h2 {
    font-weight: normal;
    @media (max-width: 940px) {
      font-size: 1.2rem;
    }
  }
  #price {
    font-size: 1.3rem;
    font-weight: 400;
    @media (max-width: 940px) {
      font-size: 1rem;
    }
  }
  .greyed-out {
    opacity: 0.3;
  }
  label {
    display: block;
    font-size: 0.8rem;
  }
  select {
    width: 90%;
    height: 2.5rem;
  }
  #quantity-selector {
    border: 1px solid black;
    width: 20%;
    margin-top: 1rem;
    position: relative;
    span {
      cursor: pointer;
      display: flex;
      align-items: center;
      position: absolute;
      height: 100%;
      top: 0;
      width: 40%;
    }
    #quantity-minus {
      left: 0;
      justify-content: flex-start;
      padding-left: 10px;
    }
    #quantity-plus {
      right: 0;
      justify-content: flex-end;
      padding-right: 10px;
    }
    #quantity-item {
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      text-align: center;
      width: 100%;
    }
    input {
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      text-align: center;
      width: 100%;
    }
  }
  button {
    margin-top: 0.8rem;
    background-color: #f4e0ea;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    width: 40%;
    padding: 0.7rem 0.1rem;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
    &:hover {
      background-color: #edcddd;
    }
  }
  .grey-btn {
    background-color: #ddd;
    color: #999;
    &:hover {
      background-color: #ddd;
      cursor: no-drop;
    }
  }
  #description {
    letter-spacing: 0.5px;
    padding-right: 3rem;
    margin-top: 1rem;
  }
  a {
    margin-bottom: 1rem;
    color: black;
    text-decoration: none;
    &:hover {
      color: #edcddd;
    }
  }
  hr {
    border-top: black 1px solid;
  }
  #social-icons {
    display: flex;
    left: 0;
    p {
      display: inline;
      letter-spacing: 1.6px;
      font-size: 0.7rem;
      font-weight: bold;
    }
    span {
      cursor: pointer;
      margin: 2rem 3rem 2rem 0;
    }
    #facebook {
      &:hover {
        color: #3b5998;
      }
    }
    #twitter {
      &:hover {
        color: #1da1f2;
      }
    }
    #pinterest {
      &:hover {
        color: #bd081c;
      }
    }
  }
`;

const RecentContainer = styled.div`
  display: flex;
  border: 1px solid black;
  padding-top: 1rem;
  flex-direction: column;
  margin-top: 1.5rem;
  text-align: center;
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
    padding-bottom: 0.5rem;
  }
`;

const RecentProducts = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }
`;
const Wrap = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  text-align: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 86%;
    border-bottom: 1px solid black;
    transition: 0.2s ease-out;
    &:hover {
      opacity: 0.75;
      cursor: pointer;
      transition: 0.2s ease-in;
    }
  }
  p {
    padding-top: 1.5rem;
  }
`;
