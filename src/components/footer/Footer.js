import React from "react";
import styled from "styled-components";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FollowFooter from "./FollowFooter";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <Container>
      <ContainerOne>
        <TextContent>
          <SportsHandballIcon />
          <h4>Thoughtfully designed</h4>
          <p>
            We design apparel and homeware that feature creative, fun designs
            for the daring individual.
          </p>
        </TextContent>
        <TextContent>
          <LoyaltyIcon />
          <h4>Ethically Sourced</h4>
          <p>
            We ensure that all our products are sourced responsibly and made
            from excellent quality materials.
          </p>
        </TextContent>
        <TextContent>
          <QuestionAnswerIcon />
          <h4>Get in touch</h4>
          <p>
            Do you have any questions? Please get in touch with us at any time
            and we'll be happy to assist you.
          </p>
        </TextContent>
      </ContainerOne>
      <FollowFooter />
      <FooterLinks />
    </Container>
  );
}
const Container = styled.div`
  background-color: #000;
  padding: 0 1.8rem;
`;

const ContainerOne = styled.div`
  padding: 2rem;
  background-color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
const TextContent = styled.div`
  color: #fff;
  h4 {
    margin-top: 1rem;
    margin-left: 1rem;
    display: inline;
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  p {
    margin-left: 2.5rem;
    font-size: 0.9rem;
    width: 70%;
  }
`;
