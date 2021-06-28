import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components/macro";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

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
      <Link to={ROUTES.ALL_PRODUCTS}></Link>
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
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
  @media (maxx-width: 768px) {
    margin-top: -4rem;
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
