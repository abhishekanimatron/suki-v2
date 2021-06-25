import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import Signup from "../../components/account/Signup";
export default function Account() {
  return (
    <div>
      <FreeShip />
      <Header />
      <Navbar />
      <Signup />
      <FollowFooter />
      <FooterLinks />
    </div>
  );
}
