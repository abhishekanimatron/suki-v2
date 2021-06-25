import FreeShip from "../../components/FreeShip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FollowFooter from "../../components/footer/FollowFooter";
import FooterLinks from "../../components/footer/FooterLinks";
import Login from "../../components/account/Login";
export default function Account() {
  return (
    <div>
      <FreeShip />
      <Header />
      <Navbar />
      <Login />
      <FollowFooter />
      <FooterLinks />
    </div>
  );
}
