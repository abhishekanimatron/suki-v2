import React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import styled from "styled-components/macro";

// some words from our founders
export default function Testimonial() {
  return (
    <div>
      <Container>
        <Row>
          <TestimonialImage>
            <img src="/images/carousel/blackdress.jpg" alt="bd" />
          </TestimonialImage>
          <TestimonialContent>
            <FormatQuoteIcon className="quote-icon" />
            <p className="quote">
              Welcome to Tsuki [つき] a unisex clothing and homeware brand that
              creates thoughtfully designed and ethically made products.
            </p>
            <img src="/images/Kanji-logo.png" alt="kanji" />
            <strong>FELIX & MARZIA</strong>
            <p className="founder-text">CO-FOUNDERS</p>
          </TestimonialContent>
        </Row>

        <Row>
          <TestimonialContent>
            <FormatQuoteIcon className="quote-icon" />
            <p className="quote">
              The name comes from the original Japanese translation - Moon.
              We've always been enchanted by her astrological beauty.
            </p>
            <img src="/images/Kanji-logo.png" alt="kanji" />
            <strong>FELIX & MARZIA</strong>
            <p className="founder-text">CO-FOUNDERS</p>
          </TestimonialContent>
          <TestimonialImage>
            <img src="/images/carousel/Felix.jpg" alt="bd" />
          </TestimonialImage>
        </Row>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const TestimonialContent = styled.div`
  background-color: #f4e0ea;
  margin: 0;
  .quote {
    text-align: left;
    font-size: 0.5rem;
    padding: 2rem;
    font-size: 1.4rem;
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .quote-icon {
    margin-top: 30%;

    @media (max-width: 768px) {
      align-self: center;
      margin-left: 2rem;
    }
    .founder-text {
      letter-spacing: 1px;
      font-size: 0.8rem;
      margin-top: -1.5rem;
      padding-left: 4rem;
    }
  }
  img {
    width: 4rem;
  }
`;

const TestimonialImage = styled.div`
  img {
    width: 100%;
    max-height: 100vh;
    object-fit: cover;
    @media (max-width: 768px) {
      max-height: 50vh;
      object-fit: cover;
    }
  }
`;
