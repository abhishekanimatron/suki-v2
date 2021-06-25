import { useEffect } from "react";

import FreeShip from "../components/FreeShip";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FollowFooter from "../components/footer/FollowFooter";
import FooterLinks from "../components/footer/FooterLinks";
import styled from "styled-components";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not found - Suki";
  }, []);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <Container>
        <h2>404 Page Not Found</h2>
        <p>
          The page you requested does not exist. Click{" "}
          <Link
            to={ROUTES.ALL_PRODUCTS}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>here </span>
          </Link>
          to continue shopping.
        </p>
        <Link to={ROUTES.BLACK_MOON} style={{ textDecoration: "none" }}>
          <Button>Browse our Blackmoon collection</Button>
        </Link>
      </Container>
      <FollowFooter />
      <FooterLinks />
    </>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 10rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: normal;
    text-align: center;
    margin-bottom: 2rem;
  }
  span {
    &:hover {
      color: pink;
    }
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #f4e0ea;
  background-color: #fff;
  color: pink;
  transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
  &:hover {
    background-color: #f4e0ea;
    color: #fff;
  }
`;
