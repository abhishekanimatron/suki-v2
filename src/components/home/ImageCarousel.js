import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function ImageCarousel() {
  var settings = {
    dots: false,
    isFinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Link to={ROUTES.ALL_PRODUCTS}>
        <ButtonWrap>
          <ShopButton>Shop Now</ShopButton>
        </ButtonWrap>
      </Link>
      <Slider {...settings}>
        <Wrap>
          <img src="/images/carousel/blackmoon.jpg" alt="bm" />{" "}
        </Wrap>
        <Wrap>
          <img src="/images/carousel/allproducts.jpg" alt="all" />
        </Wrap>
        <Wrap>
          <img src="/images/carousel/blackmoon2.jpg" alt="bm2" />{" "}
        </Wrap>
      </Slider>{" "}
    </Container>
  );
}

const Container = styled.div`
  @media (maxx-width: 768px) {
    margin-top: -4rem;
  }
`;
const ButtonWrap = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 1rem 4rem;
  @media (maxx-width: 768px) {
    margin-top: -4rem;
  }
`;

const ShopButton = styled.button`
  
  text-transform: uppercase;
  margin-bottom: 1rem;
  background-color: #fff;
  color: black;
  border: 1px solid #000;
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
    background-color: #000;
    color: #fff;
  }
`;

const Wrap = styled.div`
  img {
    max-height: 70vh;
    object-fit: contain;
    width: 100%;
    @media (max-width: 768px) {
      transform: scale(1);
      object-fit: cover;
      height: 80vh;
    }
  }
`;
