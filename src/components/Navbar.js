import styled from "styled-components/macro";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <Nav className="main-nav">
        <ul className="main-menu">
          <li>
            <Link
              className="nav-btn"
              to={ROUTES.RESPONSIBILITY}
              style={{ textDecoration: "none" }}
            >
              REPONSIBILITY
            </Link>
          </li>
          <li>
            <Link
              className="nav-btn"
              to={ROUTES.ALL_PRODUCTS}
              style={{ textDecoration: "none" }}
            >
              BASICS
            </Link>
          </li>
          <li>
            <Link
              className="nav-btn"
              to={ROUTES.BLACK_MOON}
              style={{ textDecoration: "none" }}
            >
              BLACK MOON
            </Link>
          </li>
          <li>
            <Link
              className="nav-btn"
              to={ROUTES.SPACE}
              style={{ textDecoration: "none" }}
            >
              SPACE 2029
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.ANIMAL_CROSSING}
              style={{ textDecoration: "none" }}
              className="nav-btn"
            >
              Animal Crossing Closet
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}

const Nav = styled.div`
  width: 100vw;
  .right-menu {
    z-index: 10;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0;
    li {
      background-color: #f4e0ea;
      padding: 0.8rem 1rem;
    }
  }
  .main-menu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    li {
      text-transform: uppercase;
      font-size: 0.8rem;
    }
  }
  .nav-btn {
    color: #222;
    &:hover {
      color: #f4e0ea;
    }
  }
`;

const Container = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  .menu-btn {
    display: none;
  }

  @media (max-width: 768px) {
    .menu-btn {
      display: block;
      cursor: pointer;
      float: right;
      position: absolute;
      right: 4rem;
      top: 5.3rem;
      &:hover {
        color: #f4e0ea;
      }
    }
    .main-menu {
      display: none;
    }
    border: none;
  }
  @media (max-width: 600px) {
    .menu-btn {
      z-index: 1;
      top: 3.8rem;
    }
  }
`;
