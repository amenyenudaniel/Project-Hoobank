import "./FeedbackCard.css";
import { quotes } from "../../assets";
const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card feedbackCard">
    <img
      src={quotes}
      alt="double__quote"
      style={{ width: "42px", height: "27px", objectFit: "contain" }}
    />

    <p>{content}</p>

    <div className="profile__container">
      <img
        src={img}
        alt={name}
        style={{ width: "48px", height: " 48px", borderRadius: "100%" }}
      />

      <div className="profile__content">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  </div>
);
export default FeedbackCard;
