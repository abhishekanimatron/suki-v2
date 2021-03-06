import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";

import styled from "styled-components/macro";
import { useEffect, useContext, useState, useRef } from "react";
import FirebaseContext from "../context/firebase";
import axios from "axios";

import { IOSSwitch } from "../components/cart/switchIos";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

import StripeCheckoutButton from "../components/stripe-button/stripe-button";
import CheckoutProduct from "../components/cart/CheckoutProduct";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FollowFooter from "../components/footer/FollowFooter";
import FooterLinks from "../components/footer/FooterLinks";

export default function Cart() {
  // fetch items and total price from our
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  // value for user there or not
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // firebase context
  const { firebase } = useContext(FirebaseContext);

  const mountedRef = useRef(true);
  useEffect(() => {
    // title update
    document.title = "Cart - Suki";
    return () => {
      mountedRef.current = false;
    };
  }, []);
  // on state change, check if user is there
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsUserLoggedIn(true);
    } else {
      console.log("Not logged in");
    }
  });

  // to fetch unique values in items, so as to not show same product twice
  //  Initialize an empty map.
  let mymap = new Map();
  // Iterate through array using filter method.
  let unique = items.filter((el) => {
    // Check if there is any entry in map with same name as of current object.
    const val = mymap.get(el.title);
    // process
    //     —-If true: i.e. there exists an entry with same name then, check if its id is less than current object’s id.
    // ——–If true: i.e current object’s id is less than the id of the object returned by map
    //              then delete the map entry and enter the current object and return true.
    // ——–if false: i.e. id of current object is greater than the id of object returned by map then return false.
    // —-If false: i.e. there is no entry in map with same name then enter the current object into map.
    if (val) {
      if (el.id < val) {
        mymap.delete(el.title);
        mymap.set(el.title, el.id);
        return true;
      } else {
        return false;
      }
    }
    mymap.set(el.title, el.id);
    return true;
  });

  return (
    <>
      <div>
        <FreeShip /> <Header />
        <Navbar />
        <Container>
          {/* if no items show empty container */}
          {items.length === 0 ? (
            <EmptyContainer>
              <h2>Shopping Cart</h2> <p>Your cart is currently empty.</p>
              <Link to={ROUTES.HOME}>
                <button>Continue Shopping</button>
              </Link>
            </EmptyContainer>
          ) : (
            <Hero>
              <h2>Shopping Cart</h2>
              <div id="hero-content">
                <div id="hero-left">
                  <table>
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th className="description">Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* map over values, and show each product on cart */}
                      {unique.map((item, i) => (
                        <CheckoutProduct
                          key={i}
                          id={item.id}
                          title={item.title}
                          productImage={item.productImage}
                          price={item.price}
                        />
                      ))}
                    </tbody>
                  </table>
                  <Link to={ROUTES.HOME} style={{ textDecoration: "none" }}>
                    <p id="continue-shopping-btn">Continue Shopping</p>
                  </Link>
                  <div id="test-warning">
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 -Exp: 04/24 - CVV:123
                  </div>
                </div>

                <div id="hero-right">
                  <h4>
                    Subtotal: <span>$ {total} USD</span>
                  </h4>
                  <div className="shipping-option">
                    <span id="icon-cart">
                      <AddShoppingCartIcon />
                    </span>
                    <div className="ship-details">
                      <h5>Shipping Protection</h5>
                      <p>
                        from Damage, Loss & Theft for <span>$0.98</span>{" "}
                      </p>
                    </div>
                    <span id="toggle-btn">
                      <IOSSwitch />
                    </span>
                  </div>
                  <Link to={ROUTES.CART}>
                    <button
                      role="link"
                      className={`${!isUserLoggedIn && "grey-btn"}`}
                    >
                      {isUserLoggedIn ? "Check Out" : "Sign in please"}
                    </button>

                    <StripeCheckoutButton price={total} />
                  </Link>
                  <p id="before-taxes-info">Before taxes & shipping costs</p>
                </div>
              </div>
            </Hero>
          )}
        </Container>
        <FollowFooter />
        <FooterLinks />
      </div>
    </>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin: 0 8rem;
  @media (max-width: 1024px) {
    margin: 0 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmptyContainer = styled.div`
  display: flex;
  margin-bottom: 10rem;
  width: 100%;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: normal;
    margin: 5rem 0 1rem;
  }
  button {
    margin: 0.8rem 0;
    background-color: #ffffff;
    color: #f4e0ea;
    border: 1px solid #f4e0ea;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.7rem 1.1rem;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
    &:hover {
      background-color: #edcddd;
      color: gray;
    }
    @media (max-width: 768px) {
      width: 45%;
    }
    @media (max-width: 536px) {
      width: 100%;
    }
  }
`;
const Hero = styled.div`
  #test-warning {
    color: #666;
  }
  h2 {
    margin: 2rem 0;
    margin-left: 1rem;
    font-weight: normal;
  }
  #hero-content {
    display: flex;
    margin-bottom: 7rem;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 2rem;
    }
    #hero-left {
      @media (max-width: 768px) {
        width: 100%;
        padding: 0%;
      }
      width: 68%;
      table {
        margin-bottom: 3rem;
        @media (max-width: 768px) {
          margin-bottom: 2rem;
        }
        width: 100%;
        table-layout: fixed;
        th {
          padding: 0.2rem 0rem;
          padding-left: 0.5rem;
          font-size: 1rem;
          font-weight: normal;
        }
        td {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 0.2rem;
          border-bottom: 1px solid #000;
        }
      }
      thead {
        border-bottom: 1px solid #000;
        tr {
          padding-bottom: 5px;
          font-size: 1rem;
          font-weight: normal;
        }
      }
      #continue-shopping-btn {
        text-decoration: none !important;
        padding-bottom: 2px;
        border-bottom: 1px solid #000;
        color: black;
        width: 20%;
        transition: ease-in 0.2s;
        cursor: pointer;
        &:hover {
          padding-bottom: 0;
        }
        @media (max-width: 768px) {
          width: 40%;
        }
      }
    }
    .img img {
      width: 3.3rem;
    }
    .description {
      width: 30%;
    }
    .desc {
      &:hover {
        cursor: pointer;
        color: #f4b1a1;
      }
      h5 {
        font-size: 1rem;
        font-weight: normal;
        &:hover {
          color: "pink";
        }
      }
      .product-property {
        color: #bbb;
        font-size: 0.95rem;
        font-weight: normal;
      }
    }
    .remove-btn {
      color: gray;
      cursor: pointer;
      font-size: 0.8rem;
      &:hover {
        text-decoration: none;
        color: #ddd;
      }
    }
    .item-price {
      font-size: 0.95rem;
    }
    #quantity-selector {
      @media (max-width: 768px) {
        width: 100%;
      }
      border: 1px solid black;
      width: 70%;
      height: 100%;
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
    }
    #hero-right {
      @media (max-width: 768px) {
        margin-top: 2rem;
      }
      display: flex;
      justify-content: space-space-between;
      flex-direction: column;
      height: 100%;
      h4 {
        font-weight: normal;
        letter-spacing: 0.7px;
        font-size: 1.3rem;
        span {
          padding: 0 1.5rem;
        }
      }
      button {
        margin-top: 0.8rem;
        background-color: #f4e0ea;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.1rem;
        width: 100%;
        padding: 0.7rem 0.1rem;
        transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
        &:hover {
          background-color: #edcddd;
        }
        @media (max-width: 768px) {
          width: 45%;
        }
        @media (max-width: 536px) {
          width: 100%;
        }
      }
      .grey-btn {
        cursor: not-allowed;
        background-color: darkgray;
        &:hover {
          background-color: darkgray;
        }
      }
      #before-taxes-info {
        margin-top: 1rem;
        @media (max-width: 768px) {
          margin-top: 0;
        }
      }
      .shipping-option {
        margin-top: 1rem;
        display: flex;
        height: 100%;
        #icon-cart {
          color: gray;
        }
        p {
          font-size: 0.8rem;
        }
        .ship-details {
          h5 {
            font-size: 0.7rem;
            margin: 0;
          }
          p {
            font-size: 0.6rem;
          }
          span {
            font-weight: bold;
            color: black;
          }
        }
        #toggle-btn {
          padding-right: 0;
        }
      }
    }
  }
`;
