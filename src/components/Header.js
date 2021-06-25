import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components/macro";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import Search from "./Search";

export default function Header() {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  const items = useSelector(selectItems);

  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <BigContainer>
      {search && <Search />}
      <Container>
        <div></div>
        <Link to={ROUTES.HOME}>
          <img id="suki-logo" src="/images/TSUKI_360x.png" alt="TSUKI" />
        </Link>
        <Wrap>
          <Link
            to={ROUTES.CART}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <span id="cart-icon">
              <ShoppingCartRoundedIcon />
              {items.length !== 0 && <span> {items.length}</span>}
            </span>
          </Link>
          <Icon onClick={handleSearch} id="search-icon">
            <SearchRoundedIcon />
          </Icon>
          <Link
            to={ROUTES.LOGIN}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Icon id="account-icon">
              <AccountCircleOutlinedIcon />
            </Icon>
          </Link>
          <Icon onClick={handleMenu} id="menu-btn">
            <MenuIcon />
          </Icon>
          {/* <span className="menu-btn" onClick={handleMenu}>
            <MenuIcon />
          </span> */}
        </Wrap>
      </Container>{" "}
      {showMenu && (
        <Nav>
          <ul className="right-menu">
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
      )}
    </BigContainer>
  );
}

const BigContainer = styled.div`
  form {
    margin: 0;
    &:active {
      border: none;
    }
  }
  input {
    width: 100%;
    padding: 1.5rem 2rem;
    outline: none;
  }
`;

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
  display: flex;
  justify-content: space-between;
  img {
    justify-self: center;
    margin-left: 4rem;
    cursor: pointer;
    height: 7.5rem;
  }
  #menu-btn {
    height: 100%;
    display: none;
    @media (max-width: 768px) {
      display: block;
      cursor: pointer;
      &:hover {
        color: #f4e0ea;
      }
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;

  #cart-icon {
    position: relative;
    float: right;
    padding: 0.8rem;
    margin-top: 3rem;

    &:hover {
      color: #f4e0ea;
      cursor: pointer;
    }
    span {
      position: absolute;
      top: 7px;
      right: 9px;
      border: 1px solid #fff;
      height: 17px;
      min-width: 17px;
      padding: 3px 2px 2px 2px;
      border-radius: 50%;
      line-height: 1em;
      font-size: 0.62em;
      font-weight: 700;
      background-color: #f1b0ea;
      color: #fff;
      text-decoration: none;
      transition: all ease-out 0.35s;
    }
  }
`;

const Icon = styled.div`
  float: right;
  padding: 0.8rem;
  margin-top: 3rem;

  &:hover {
    color: #f4e0ea;
    cursor: pointer;
  }
`;
