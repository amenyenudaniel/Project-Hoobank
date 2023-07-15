import "./Business.css";
import { features } from "../../data";
import Button from "../button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="feature__container feature-card" data-aos="fade-up">
    <div className="feature">
      <img
        src={icon}
        alt="icon"
        style={{ width: "50%", height: "50%", objectFit: "contain" }}
      />
    </div>
    <div className="feature__content">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  </div>
);

const Business = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="features" id="features">
      <div className="features__info" data-aos="fade-left">
        <h2>
          You do the business, <br />
          we'll handle the money.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          officia optio quaerat illo rem repellat dolore mollitia aspernatur
          doloremque officiis? Lorem ipsum dolor sit amet.
        </p>
        <Button className="buttonC" />
      </div>

      <div className="features__content">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
