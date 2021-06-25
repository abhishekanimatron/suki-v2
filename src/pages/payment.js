import styled from "styled-components/macro";
import React, { useEffect } from "react";

function Payment() {
  let totalPrice = window.location.href.substr(35).toString();
  useEffect(() => {
    document.title = "Payments - Suki";
  }, []);
  return (
    <div>
      <Container>
        <h3>Suki - Payment</h3>
        <form>
          <button>
            Buy with <span><img src='/images/google-pay-brands.svg' alt='gpay'/></span>
          </button>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label for="ccn">Credit Card Number:</label>
<input  type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"/>
          <label htmlFor="CVV">CVV/CVC</label>
          <input type="password" name="CVV" placeholder="CVV" maxlength="3" pattern="[0-9\s]{3,3}" inputMode="numeric" />
          <label htmlFor="expiry">Expiry Date</label>
          <input type="date" name="expiry" placeholder="MM/YYYY" />
          <button id="pay-btn">
            Pay <span>${totalPrice}</span>
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Payment;

const Container = styled.div`
  background-color: #f4e0ea;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 130%;
  text-align: center;
  justify-content: center;
  align-items: center;
  form {
    width: 30vw;
  }
  h3 {
    margin-top: 3rem;
    display: block;
    font-weight: normal;
  }
  label {
    color: #fff;
    font-weight: 600;
    float: left;
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
  }
  input {
    border: 1px solid #444;
    width: 100%;
    padding: 0.7rem;
    border-radius: 3px;
    margin-bottom: 1.2rem;

    box-shadow: 3px 3px 3px paleturquoise;
  }
  #pay-btn{
    background-color: black;
    color: #eee;
  }
  button {
    img{
      width:3rem;
      color:white;
    }
    color: #000;
    font-weight: bold;
    border: none;
    height: 3rem;
    width: 100%;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 2px 2px #bdbdbd, -2px -2px 6px #dbdbdb;
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
    &:hover {
      background-color: #eee;
    }
  }
`;
