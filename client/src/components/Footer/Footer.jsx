import "./Footer.scss";
import {
  supportLinks,
  værtskabLinks,
  airbnbLinks,
} from "../../constants/constants";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="content">
        <h1>Support</h1>
        {supportLinks.map((link) => (
          <p key={link.id}>{link.title} </p>
        ))}
      </div>
      <div className="content">
        <h1>Værtskab</h1>
        {værtskabLinks.map((link) => (
          <p key={link.id}>{link.title} </p>
        ))}
      </div>
      <div className="content">
        <h1>Airbnb</h1>
        {airbnbLinks.map((link) => (
          <p key={link.id}>{link.title} </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
