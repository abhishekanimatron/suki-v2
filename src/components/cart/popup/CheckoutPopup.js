import React from "react";
import styled from "styled-components/macro";

function CheckoutPopup(props) {
  return props.trigger ? (
    <Popup>
      <PopupInner>{props.children}</PopupInner>
    </Popup>
  ) : (
    ""
  );
}

export default CheckoutPopup;

const Popup = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PopupInner = styled.div`
  border: 1px solid #222;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  background-color: #fff;
  @media (max-width: 1136px) {
    width: 45%;
  }
  @media (max-width: 900px) {
    width: 65%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
