import "./Hero.css";
import { discount, robot } from "../../assets";
import GetStarted from "../get-started/GetStarted";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="home" className="hero__section">
      <div className="hero__left" data-aos="fade-up">
        <div className="discount bg-discount-gradient">
          <img src={discount} alt="discount" className="discount__image" />
          <p>
            <span>20%</span> Discount For
            <span> 1 Month</span> Account
          </p>
        </div>

        <div className="hero__heading">
          <h1>
            The Next <br /> <span className="text-gradient">Generation</span>{" "}
            <br />
            Payment Method.
          </h1>
          <div className="get__started">
            <GetStarted />
          </div>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quaerat non aliquam hic doloremque nostrum labore modi similique
          placeat djhvbhj.
        </p>
      </div>

      <div className="hero__right" data-aos="fade-down">
        <img src={robot} alt="billing" className="robot__img" />

        <div className="hero__gradient1 pink__gradient"></div>
        <div className="hero__gradient2 white__gradient"></div>
        <div className="hero__gradient3 blue__gradient"></div>
      </div>
      <div className="get__started2">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
