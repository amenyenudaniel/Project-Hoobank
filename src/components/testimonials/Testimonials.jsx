import "./Testimonials.css";
import { feedback } from "../../data";
import FeedbackCard from "../feedback-card/FeedbackCard";
const Testimonials = () => (
  <section id="clients" style={{overflow: "hidden" }} className="testimonials">
    <div
      className="blue__gradient"
      style={{
        position: "absolute",
        zIndex: "0",
        borderRadius: "100%",
        right: "-30%",
        width: "60%",
        height: "60%",
        overflow: "hidden",
      }}
    />

    <div className="testimonials__heading">
      <h1>
        What people are <br className="breakTag" /> saying about us
      </h1>

      <div className="p__test">
        <p>
          Everything you need to accept card payment and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="feedback-container feedback">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
