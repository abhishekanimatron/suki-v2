import { useEffect } from "react";
import { Link } from "react-router-dom";
import { homePageProductList } from "../../data/data";
import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import styled from "styled-components";

export default function Blackmoon() {
  useEffect(() => {
    document.title = "Black Moon - Suki";
  }, []);
  let blackMoonProductsList = homePageProductList.slice(12, 20);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        {blackMoonProductsList.map((product) => (
          <Wrap key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.productImage} alt={product.title} />
            </Link>
            <p>{product.title}</p>
            <h6>{product.price ? `$ ${product.price} USD ` : "Sold Out"}</h6>
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
    &:hover {
      transform: scale(1.01);
      opacity: 0.75;
      cursor: pointer;
      transition: 0.2s ease-in;
      box-shadow: 10px 10px 30px #bdbdbd, -20px -20px 30px #ffffff;
    }
  }
  p {
    padding-top: 1rem;
  }
  h6 {
    font-weight: normal;
    color: #444;
    padding-bottom: 4rem;
    @media (max-width: 1024px) {
      padding-bottom: 6rem;
    }
    @media (max-width: 1024px) {
      padding-bottom: 1rem;
    }
  }
`;
