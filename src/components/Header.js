import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import "../styles/icons.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import MenuIcon from "@material-ui/icons/Menu";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector(selectItems);

  return (
    <div>
      <Wrap>
        <Link to={ROUTES.HOME}>
          <img id="suki-logo" src="/images/TSUKI_360x.png" alt="TSUKI" />
        </Link>
        <Icon id="menu-icon">
          <MenuIcon />
        </Icon>
        <Link
          to={ROUTES.CART}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div id="cart-icon">
            <ShoppingCartRoundedIcon />
            {items.length!==0&& (<span > {items.length}</span>)}
            
            {/* <Icon id="cart-icon">
              <ShoppingCartRoundedIcon />
            </Icon> */}
          </div>
        </Link>
        <Icon id="search-icon">
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
    </div>
  );
}

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
