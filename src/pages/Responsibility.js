import { useEffect } from "react";
import styled from "styled-components";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FollowFooter from "../components/footer/FollowFooter";
import FooterLinks from "../components/footer/FooterLinks";

export default function Responsibility() {
  useEffect(() => {
    document.title = "Responsibility - Suki";
  }, []);
  return (
    <>
      <Container>
        <FreeShip />
        <Header />
        <Navbar />
        <h2>Our Responsibility</h2>
        <SampleImage>
          <img src="/images/carousel/blackmoon.jpg" alt="bm" />
        </SampleImage>
        <TextContent>
          <p>
            We believe that ethical sourcing is multi-faceted. It isn’t simply
            using organic materials, or paying at least minimum wage, it’s the
            process of systematically choosing the best option across a variety
            of factors. We produce many different products with different
            industry standards, so with each new addition, we learn more about
            how to assess the social, environmental, and individual impacts we
            make by running this business. We want you to have the best product
            possible, so here’s how we ensure that happens:
          </p>
          <h3>
            <span>1.</span> Methodology
          </h3>
          <p>
            All collections are 100% custom cut and sew in process, involving
            months of fabric selection, fit iterations, and strict manufacturing
            supervision. From manufacturing, products are quality-checked,
            organized, packed and labelled in our own warehouse, then shipped to
            customers. Even our customer service team is fully in-house, never
            outsourced beyond our small, devoted team.
          </p>
          <h3>
            <span>2.</span> Responsibility
          </h3>
          <p>
            Beyond our methodology, we have an extensive list of
            responsibilities we adhere to while making products, which includes:
          </p>
          <h4>Responsibility to Social Welfare throughout the Supply Chain</h4>
          <ul>
            <li>
              Fabric Selection: All fabrics used in our products are produced in
              the same country as the manufacturer. In most cases, and with all
              of our Basics products, this is Canada.
            </li>
            <li>
              Any manufacturer we work with outside Canada must submit social
              audits and documentation to prove they follow our standards in
              social policy.{" "}
            </li>
            <li>
              Our Social Labour Standards:{" "}
              <ul>
                <li>
                  Dignity, respect, and concern for all workers in all steps of
                  the supply chain;
                </li>
                <li>Fair wages;</li>
                <li>Reasonable working hours;</li>
                <li>
                  The ability and support to develop unions or worker
                  representation;
                </li>
                <li>The ability to file grievances anonymously;</li>
                <li>
                  A strong stance against discrimination of any kind, channels
                  to report violations;
                </li>
                <li>
                  No child labour, additional protections against occupational
                  hazards for workers under 20;
                </li>
                <li>
                  Occupational Health and Safety checks and audits, including
                  checking staff compliance to wearing required PPE;
                </li>
                <li>
                  Funding for social security including healthcare, accident
                  insurance, and holiday pay;
                </li>
                <li>
                  Building safety including fire alarm checks, carbon dioxide
                  monitor checks, building safety inspections, etc.
                </li>
                <li>
                  We do not work with distributors without specific factory
                  audits, or factories who allow home working or piecework;
                </li>
                <li>
                  No precarious employment, no forced employment, no bonded
                  labour;
                </li>
                <li>
                  Ethical business behaviour, without bribery, embezzlement,
                  corruption, or extortion.
                </li>
              </ul>
            </li>
            <li>
              We produce most of our clothing in Toronto, Canada, and though
              there are strong labour laws to protect workers, and high general
              social support from our government, we only produce goods in
              factories we’ve personally visited, and would be proud for our
              customers to visit, too.
            </li>
            <li>
              Any item not produced in Canada or the United States requires
              either Sedex or BSCI certification with passing grades, and the
              audit must be valid until the anticipated delivery date of the
              product. If we work with the manufacturer again, we request a new
              valid audit, as required. Both of these audit forms take into
              account all of our Labour Standards, as well as some Environmental
              Impact Assessments.
            </li>
          </ul>
          <SampleImage>
            <img src="/images/carousel/ethical-source.jpg" alt="bm" />
          </SampleImage>
          <h4>Responsibility to the Environment and Sustainability</h4>
          <ul>
            <li>
              When choosing materials to use for new products, we assess each
              item individually to provide the best quality, longest wear, and
              to minimize environmental impact.
            </li>
            <li>
              Our Basics line utilizes cotton grown in the USA, with all fabric
              knitting, dyeing, and finishing done in Canada, most within less
              than 100 km of where the clothing is cut and sewn.
            </li>
            <li>
              We frequently look into new technological options, especially with
              regard to packaging and shipping. While we currently use
              recyclable poly mailers, we are also examining other options,
              including compostable, recycled, and extra thick paper shipping
              bags.
            </li>
            <li>
              All of our shipping bags are produced in the USA, made from a
              minimum of 30% recycled content, and are recyclable with film
              plastic collection in most areas (so are most of your other
              shipping bags, don’t mix them into your garbage!).
            </li>
            <li>
              Our distribution warehouse is based in Toronto, Canada, only a few
              kilometers away from where our largest volume of clothing is
              produced, reducing the impact of transportation emissions, one of
              the largest issues in sustainable production. We manufacture
              locally to reduce our carbon footprint.
            </li>
            <li>
              We are not fast fashion, we produce quality, timeless items that
              should be with you for a long time.
            </li>
          </ul>
          <p>
            As always, we’re here to help, so please get in touch if you have
            any questions or concerns about our products.
          </p>
          <SampleImage>
            <img src="/images/carousel/blackmoon2.jpg" alt="bm" />
          </SampleImage>
        </TextContent>
      </Container>
      <FollowFooter />
      <FooterLinks />
    </>
  );
}

const Container = styled.div`
  align-items: center;
  text-align: center;
  h2 {
    margin: 2rem 0;
    font-weight: normal;
  }
`;

const SampleImage = styled.div`
  img {
    width: 45%;
    margin: 2rem 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 1rem 0;
    align-self: center;
    line-height: 1.4;
    letter-spacing: 1px;
    font-size: 1rem;
    width: 45%;
    text-align: left;
  }
  h3 {
    text-align: left;
    margin-top: 2rem;
    margin-left: 27%;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: normal;
    color: skyblue;
    span {
      color: black;
      font-size: 1.2rem;
    }
  }
  h4 {
    margin-top: 2rem;
    font-size: 1.3rem;
    color: skyblue;
    font-weight: normal;
  }
  ul {
    margin-left: 27%;
    width: 45%;
    li {
      margin-top: 1rem;
      margin-left: 0;
      text-align: left;
      ul {
        width: 100%;
        margin-left: 0;
        margin-top: -1rem;
      }
    }
  }
`;
