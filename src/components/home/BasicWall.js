import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

// our banner image
export default function BasicWall() {
  return (
    <Container>
      <img src="/images/fINALHERO2_2048x.jpg" alt="" />
      <ButtonWrap>
        <h3>Back to Basics</h3>
        <Link to={ROUTES.ALL_PRODUCTS} style={{ textDecoration: "none" }}>
          <ShopButton>Shop Now</ShopButton>
        </Link>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  img {
    display: flex;
    top: 0;
    right: 0;
    z-index: 200;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    overflow: hidden;
    @media (max-width: 768px) {
      /* width: ; */
      /* object-fit: contain; */
      overflow: hidden;
      object-position: center;
      /* transform: translateX(-25%); */
    }
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  left: 0;
  text-align: center;
  padding: 1rem 4rem;
  h3 {
    margin: 2rem;
    position: relative;
    color: #fff;
    font-size: 1.5rem;
    height: 2rem;
    font-weight: lighter;
  }
  @media (max-width: 940px) {
    margin-top: -4rem;
    top: 6rem;
  }
  @media (max-width: 768px) {
    margin-top: -4rem;
    top: 6rem;
  }
`;

const ShopButton = styled.button`
  text-transform: uppercase;
  margin-bottom: 1rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0.7rem 2rem;
  transition: 0.7s all cubic-bezier(0.23, 1, 0.32, 1);
  @media (max-width: 768px) {
    margin-top: -40rem;
  }
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
