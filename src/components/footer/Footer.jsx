import "./Footer.css";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../data";
const Footer = () => (
  <section className="footer__Section">
    <div className="footer__heading">
      <div className="footer__p">
        <img
          src={logo}
          alt="hoobank"
          style={{ width: "266px", height: "72px", objectFit: "contain" }}
        />

        <p>A new way to make the payment easy, reliable and secure.</p>
      </div>

      <div className="footer__links__container">
        {footerLinks.map((footerLink) => (
          <div className="footer__links" key={footerLink.key}>
            <h4>{footerLink.title}</h4>

            <ul>
              {footerLink.links.map((link, index) => (
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
        width: "100%",
        height: ".5px",
        backgroundColor: "var(--dimWhite)",
      }}
    />
    <div className="social__container">
      <p>2023 HooBank. All Rights Reserved.</p>

      <div className="social__icons">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            style={{ height: "21px", width: "21px", cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
