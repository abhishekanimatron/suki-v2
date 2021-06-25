import { useEffect } from "react";
import BasicWall from "../components/home/BasicWall";
import FreeShip from "../components/FreeShip";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/home/ImageCarousel";
import Testimonial from "../components/home/Testimonial";
import LandShopTrio from "../components/home/LandShopTrio";
import LandItems from "../components/home/LandItems";
import Footer from "../components/footer/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Suki";
  }, []);
  return (
    <>
      <FreeShip />
      <Header />
      <Navbar />
      <BasicWall />
      <ImageCarousel />
      <Testimonial />
      <LandShopTrio />
      <LandItems />
      <Footer />
    </>
  );
}
