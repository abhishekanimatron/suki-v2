import { useState, useEffect } from "react";
import { homePageProductList } from "../data/data";
import Fuse from "fuse.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const options = {
      keys: ["title"],
    };
    const fuse = new Fuse(homePageProductList, options);
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (searchTerm.length > 2 && results.length > 0) {
      setObjects(results);
    } else {
      setObjects(["No Results."]);
    }
  }, [searchTerm]);

  let mymap = new Map();
  let unique = objects.filter((el) => {
    const val = mymap.get(el.title);
    if (val) {
      if (el.id < val) {
        mymap.delete(el.title);
        mymap.set(el.title, el.id);
        return true;
      } else {
        return false;
      }
    }
    mymap.set(el.title, el.id);
    return true;
  });
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search our store"
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </form>
      {unique.length > 1 ? (
        <CardContainer>
          <p style={{ textAlign: "center", color: "pink" }}>
            {searchTerm.length > 3 &&
              `Your search for ${searchTerm} has revealed the following.`}
          </p>
          {unique?.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <img src={item.productImage} alt={item.productTitle} />
                <p className="item-info">{item.title}</p>
                <p className="price-info">
                  {item.price === 0 ? "Sold Out" : `$ ${item.price} USD`}
                </p>
              </Card>
            </Link>
          ))}
        </CardContainer>
      ) : (
        <p style={{ textAlign: "center", color: "pink" }}>
          {searchTerm.length > 3 && "No items like that in our store."}
        </p>
      )}
    </div>
  );
}

const CardContainer = styled.div`
  display: grid;
  z-index: 10;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;
const Card = styled.div`
  text-align: center;
  border: 1px solid #111;
  border-collapse: collapse;

  img {
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid #111;
    height: 50vh;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) opacity;
    &:hover {
      opacity: 0.9;
    }
  }
  .item-info {
    margin-top: 0.5rem;
    color: #222;
    font-size: 0.9rem;
  }
  .price-info {
    color: #666;
    font-size: 0.8rem;
  }
`;
