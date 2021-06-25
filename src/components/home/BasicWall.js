import React from "react";
import styled from "styled-components";

export default function BasicWall() {
  return (
    <Container>
      <img src="/images/fINALHERO2_2048x.jpg" alt="" />
      <HeroContentWrap>
        <HeroContent>
          <h3>Back to Basics</h3>
        </HeroContent>
      </HeroContentWrap>
    </Container>
  );
}

const Container = styled.div`
  img {
    z-index: -100;
    max-width: 100%;
    margin: 0;
    border: 0;
    display: block;
    height: 100vh;
    overflow: hidden;
    background-position: center;
    height: auto;
  }
`;

const HeroContentWrap = styled.div`
  display: flex;
  /* position: absolute; */
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  h3 {
    margin: 2rem;
    color: black;
    font-size: 1.5rem;
    height: 2rem;
    font-weight: lighter;
  }
`;
