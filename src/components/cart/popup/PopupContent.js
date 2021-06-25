import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import { IOSSwitch } from "../switchIos";

function PopupContent({ title, productImage, price }) {
  return (
    <Container>
      <img src={productImage} alt="Product " />
      <Content>
        <p id="info">ADDED TO YOUR CART</p>
        <p id="title">{title}</p>
        <p id="size">S</p>
        <p id="price">$ {price} USD</p>
        <div className="shipping-option">
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
        <Link to={ROUTES.HOME}>
          <button id="checkout">Checkout</button>
        </Link>
        <Link to={ROUTES.CART}>
          <button id="view-cart">View Cart</button>
        </Link>
      </Content>
    </Container>
  );
}

export default PopupContent;

const Container = styled.div`
  display: flex;
  padding: 1rem;
  img {
    max-width: 50%;
    object-fit: cover;
    padding: 1.5rem;
  }
`;

const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: space-between;
  /* align-items: center; */
  text-align: center;
  button {
    margin: 0;
    border: none;
    color: white;
    width: 100%;
    padding: 0.6rem 0.15rem;
    margin-top: 0.3rem;
    font-weight: bold;
    font-size: 0.7rem;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
  }
  #info {
    margin: 0;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  #title {
    margin: 0;
    font-size: 1.1rem;
  }
  #size,
  #price {
    margin: 0;
    font-size: 0.8rem;
  }
  #checkout {
    background-color: #edcddd;
    border: 1px solid #edcddd;
    color: #ffffff;
    &:hover {
      background-color: #edcbcb;
      color: #666666;
    }
  }
  #view-cart {
    background-color: #fff;
    border: 1px solid #edcddd;
    color: #edcddd;
    &:hover {
      background-color: #edcddd;
      color: #666666;
    }
  }
  .shipping-option {
    text-align: left;
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
`;
