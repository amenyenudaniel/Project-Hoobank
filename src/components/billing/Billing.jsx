import "./Billing.css";
import { apple, bill, google } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Billing = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <section id="product" className="billing" style={{ overflow: "hidden" }}>
      <div className="billing__img" data-aos="fade-right">
        <img src={bill} alt="billing" />

        <div className="billing__gradient1 white__gradient"></div>
        <div className="billing__gradient2 pink__gradient"></div>
      </div>

      <div className="billing__info" data-aos="fade-left">
        <h2>
          Easily control your billing & invoicing.
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dolores expedita porro autem aut tempora quo perferendis, magni eum
          quisquam.
        </p>

        <div className="billing__btn">
          <img
            src={apple}
            alt="apple_store"
            style={{
              width: "200px",
              height: "80px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />

          <img
            src={google}
            alt="google_play"
            style={{
              width: "200px",
              height: "80px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
