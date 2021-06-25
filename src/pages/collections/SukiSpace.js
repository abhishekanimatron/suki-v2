import { useEffect } from "react";
import { Link } from "react-router-dom";
import { homePageProductList } from "../../data/data";
import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import styled from "styled-components";

export default function SukiSpace() {
  useEffect(() => {
    document.title = "SPACE 2029 - Suki";
  }, []);
  let spaceProductsList = homePageProductList.slice(21, 30);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        {spaceProductsList.map((product) => (
          <Wrap key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.productImage} alt={product.title} />
            </Link>
            <h5>{product.sale !== 0 ? "SALE" : "RARE"}</h5>
            <p>{product.title}</p>
            <h6>
              {product.price
                ? `Previously, $ ${product.discountPrice} Now $${product.price} USD `
                : "Sold Out"}
            </h6>
          </Wrap>
        ))}
      </Container>
      <FollowFooter />
      <FooterLinks />
    </>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: auto auto auto;
  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Wrap = styled.div`
  background-color: #eee;
  text-align: center;
  padding: 2rem;
  img {
    box-shadow: 5px 5px 5px #bdbdbd, -20px -20px 30px #ffffff;
    border-radius: 2%;
    object-fit: cover;
    width: 100%;
    height: 86%;
    transition: 0.2s ease-out;
    @media (max-width: 1100px) {
      height: 80%;
    }
    &:hover {
      transform: scale(1.01);
      opacity: 0.75;
      cursor: pointer;
      transition: 0.2s ease-in;
      box-shadow: 10px 10px 30px #bdbdbd, -20px -20px 30px #ffffff;
    }
  }
  p {
    display: inline;
    padding-top: 1rem;
  }
  h5 {
    margin-top: 1rem;
    font-weight: normal;
    color: #fff;
    letter-spacing: 2px;
    font-size: 0.7rem;
    padding: 0.7rem 0;
    width: 20%;
    background-color: #000;
  }
  h6 {
    font-weight: normal;
    color: #444;
    padding-bottom: 4rem;
    span {
      text-decoration: line-through;
      color: #888;
    }
    @media (max-width: 1024px) {
      padding-bottom: 10rem;
    }
    @media (max-width: 1024px) {
      padding-bottom: 1rem;
    }
  }
`;
