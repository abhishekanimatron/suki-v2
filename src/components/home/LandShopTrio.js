import { homePageProductList } from "../../data/data";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

// some items from shop; featured
export default function LandShopTrio() {
  // slice only first 2 items from list
  let landingShopProductsList = homePageProductList.slice(0, 2);
  return (
    <Container>
      {landingShopProductsList.map((product) => (
        <Wrap key={product.id}>
          <ShopImage>
            <img src={product.modelImage} alt={product.title} />
          </ShopImage>
          <ShopContent>
            <p className="shop-text">Shop the look</p>
            <Link to={`/product/${product.id}`}>
              <img src={product.productImage} alt={product.title} />
            </Link>
            <p className="item-name">{product.title}</p>
            <p className="item-price">`${product.price} USD`</p>
          </ShopContent>
        </Wrap>
      ))}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  @media (maxx-width: 768px) {
    margin-top: -4rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #99cfe0;
`;

const ShopImage = styled.div`
  max-width: 50%;
  img {
    max-height: 105vh;
    object-fit: cover;
    width: 100%;
  }
`;
const ShopContent = styled.div`
  max-width: 50%;
  text-align: center;
  height: 100%;

  img {
    width: 40%;
    border: 1px solid #000;
    cursor: pointer;
  }
  .item-name {
    padding: 1px;
    margin: 0.5rem 0 0 0;
    background-color: white;
  }
  .item-price {
    background-color: white;
    padding: 1px;
    font-weight: lighter;
    font-size: small;
  }
  .shop-text {
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
