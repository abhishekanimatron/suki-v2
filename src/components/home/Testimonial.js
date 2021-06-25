import React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import "../../styles/testimonial.css";

export default function Testimonial() {
  return (
    <div>
      <div className="row">
        <div className="col testimonial-img">
          <img src="/images/carousel/blackdress.jpg" alt="bd" />
        </div>
        <div className="col testimonial-content">
          <FormatQuoteIcon className="quote-icon" style={{ fontSize: 80 }} />
          <p className="quote">
            Welcome to Tsuki [つき] a unisex clothing and homeware brand that
            creates thoughtfully designed and ethically made products.
          </p>
          <img src="/images/Kanji-logo.png" alt="kanji" />
          <strong>FELIX & MARZIA</strong>
          <p className="founder-text">CO-FOUNDERS</p>
        </div>
      </div>
      <div className="row">
        <div className="col testimonial-content">
          <FormatQuoteIcon className="quote-icon" style={{ fontSize: 80 }} />
          <p className="quote">
            The name comes from the original Japanese translation - Moon. We've
            always been enchanted by her astrological beauty.
          </p>
          <img src="/images/Kanji-logo.png" alt="kanji" />
          <strong>FELIX & MARZIA</strong>
          <p className="founder-text">CO-FOUNDERS</p>
        </div>
        <div className="col testimonial-img">
          <img src="/images/carousel/Felix.jpg" alt="bd" />
        </div>
      </div>
    </div>
  );
}
