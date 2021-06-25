import React from "react";
import styled from "styled-components";

export default function FooterLinks() {
  return (
    <FooterLinksContainer>
      <p>© suki market 2021</p>
      <p>customer support</p>
      <p>order shipping information</p>
      <p>about</p>
      <p>collaborations</p>
      <p>wholesalers & retailers</p>
      <p>terms & conditions</p>
      <p>privacy policy</p>
      <p>powered by shopify</p>
    </FooterLinksContainer>
  );
}

const FooterLinksContainer = styled.div`
  padding: 2rem;
  background-color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }

  p {
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 0.7rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: lighter;
    &:hover {
      color: skyblue;
    }
  }
`;
