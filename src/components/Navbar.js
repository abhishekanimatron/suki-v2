import { DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";
import "../styles/nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [collectionShow, setCollectionShow] = useState(false);
  const [homeShow, setHomeShow] = useState(false);
  const showCollectionDropdown = (e) => {
    setCollectionShow(!collectionShow);
  };
  const hideCollectionDropdown = (e) => {
    setCollectionShow(false);
  };
  const showHomeDropdown = (e) => {
    setHomeShow(!collectionShow);
  };
  const hideHomeDropdown = (e) => {
    setHomeShow(false);
  };
  return (
    <Container>
      <Nav>
        <DropdownButton
          id="home-menu"
          className="dropdown-basic-button"
          title="Home ホームページ"
          show={homeShow}
          onMouseEnter={showHomeDropdown}
          onMouseLeave={hideHomeDropdown}
        >
          <Dropdown.Item className="menu-item">
            <Link
              as={Link}
              to={ROUTES.RESPONSIBILITY}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              RESPONSIBILITY
            </Link>
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="collection-menu"
          className="dropdown-basic-button"
          title="Collections コレクション"
          show={collectionShow}
          onMouseEnter={showCollectionDropdown}
          onMouseLeave={hideCollectionDropdown}
        >
          <Dropdown.Item className="menu-item">
            <Link
              as={Link}
              to={ROUTES.ALL_PRODUCTS}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              BASICS
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className="menu-item">
            <Link
              as={Link}
              to={ROUTES.BLACK_MOON}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              BLACK MOON
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className="menu-item">
            <Link
              as={Link}
              to={ROUTES.SPACE}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              SUKI SPACE PROGRAM
            </Link>
          </Dropdown.Item>
        </DropdownButton>

        <Link to={ROUTES.ANIMAL_CROSSING} style={{ textDecoration: "none" }}>
          <h6>
            Animal Crossing Closet <span>どうぶつの森 コレクション</span>
          </h6>
        </Link>
      </Nav>
    </Container>
  );
}

const Nav = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h6 {
    font-weight: normal;
    color: #000;
    overflow: hidden;
    &:hover {
      color: rgb(75, 161, 187);
      background-color: transparent;
      cursor: pointer;
    }
    span {
      @media (max-width: 900px) {
        /* display: flex; */
        display: none;
      }
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;
