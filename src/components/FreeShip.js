import React from "react";
import styled from "styled-components";

export default function FreeShip() {
  return (
    <Container>
      <p>
        FREE WORLDWIDE SHIPPING OVER $199<span> | </span>
        <span>USE CODE: SUKI</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #010;
  color: white;
  z-index: 2;
  text-align: center;

  p {
    padding: 0.3rem 0;
    margin: 0;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;

    span {
      font-weight: lighter;
      padding-left: 1rem;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
