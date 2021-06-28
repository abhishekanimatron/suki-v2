import Fuse from "fuse.js";

import { useState, useEffect } from "react";
import { homePageProductList } from "../data/data";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import ClearIcon from "@material-ui/icons/Clear";

export default function Search() {
  // value for given search term
  const [searchTerm, setSearchTerm] = useState("");
  // objects list which has the resultant objects from the search performed
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // options with a key of 'title' based on which our search is done
    const options = {
      keys: ["title"],
    };
    // a fuse based on the list and above option
    const fuse = new Fuse(homePageProductList, options);
    // results which is returned from fuse search
    const results = fuse.search(searchTerm).map(({ item }) => item);
    // if search term has >2 length and we do get some results on basis of it, set objects array to results
    if (searchTerm.length > 2 && results.length > 0) {
      setObjects(results);
    } else {
      setObjects(["No Results."]);
    }
  }, [searchTerm]);

  // to pull out only unique values from objects array
  //  Initialize an empty map.
  let mymap = new Map();
  // Iterate through array using filter method.
  let unique = objects.filter((el) => {
    // Check if there is any entry in map with same name as of current object.
    const val = mymap.get(el.title);
    // process
    //     —-If true: i.e. there exists an entry with same name then, check if its id is less than current object’s id.
    // ——–If true: i.e current object’s id is less than the id of the object returned by map
    //              then delete the map entry and enter the current object and return true.
    // ——–if false: i.e. id of current object is greater than the id of object returned by map then return false.
    // —-If false: i.e. there is no entry in map with same name then enter the current object into map.
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
      {/* if there are search results show this container */}
      {unique.length > 1 ? (
        <Container>
          <CardContainer>
            {/* map over items in unique list and show a card for each */}
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
          <Button onClick={() => setSearchTerm("")}>
            <ClearIcon />
          </Button>
        </Container>
      ) : (
        // if no items in the list then show this statement
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

const Container = styled.div`
  position: relative;
`;
const Button = styled.div`
  position: absolute;
  top: -3.2rem;
  right: 2rem;
  color: "#fff";
  margin: auto;
  text-align: center;
  cursor: pointer;
`;
