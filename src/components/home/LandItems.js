import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components/macro";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

// bottom carousel
export default function LandItems() {
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
      <Slider {...settings}>
        <Wrap>
          <img src="/images/carousel/ethical-source.jpg" alt="es" />{" "}
          <HeroContent>
            <h1>Ethically Sourced</h1>
            <Link to={ROUTES.RESPONSIBILITY}>
              <Button>READ MORE</Button>
            </Link>
          </HeroContent>
        </Wrap>
        <Wrap>
          <img src="/images/carousel/smile-cap.jpg" alt="sc" />
          <HeroContent>
            <h1>Corduroy Cap</h1>
            <Link to={"/product/18"}>
              <Button>READ MORE</Button>
            </Link>
          </HeroContent>
        </Wrap>
        <Wrap>
          <img src="/images/carousel/sock-set.jpg" alt="ss" />{" "}
          <HeroContent>
            <h1>SOCK SET</h1>
            <Link to={"/product/19"}>
              <Button>READ MORE</Button>
            </Link>
          </HeroContent>
        </Wrap>
      </Slider>{" "}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 4rem;
  @media (maxx-width: 768px) {
    margin-top: -4rem;
  }
`;

const Wrap = styled.div`
  img {
    max-height: 100vh;
    object-fit: cover;
    width: 100%;
    @media (max-width: 768px) {
      transform: scale(1);
      object-fit: cover;
      height: 80vh;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  float: right;
  bottom: 15rem;
  right: 2rem;
  background-color: #fff;
  padding: 3rem 2rem;
  text-align: right;
  h1 {
    font-weight: lighter;
  }
`;
const Button = styled.button`
  border: 1px solid black;
  letter-spacing: 1.7px;
  border-radius: 2%;
  padding: 1rem 2rem;
  color: #000;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
