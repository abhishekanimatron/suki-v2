import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import "../styles/icons.css";
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
  return (
    <>
      <Container>
        {search && <Search />}
        <Wrap>
          <Link to={ROUTES.HOME}>
            <img id="suki-logo" src="/images/TSUKI_360x.png" alt="TSUKI" />
          </Link>
          <Link
            to={ROUTES.CART}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div id="cart-icon">
              <ShoppingCartRoundedIcon />
              {items.length !== 0 && <span> {items.length}</span>}
            </div>
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
        </Wrap>
      </Container>
    </>
  );
}

const Container = styled.div`
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
const Wrap = styled.div`
  text-align: center;
  img {
    margin-left: 4rem;
    cursor: pointer;
    height: 7.5rem;
  }
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
