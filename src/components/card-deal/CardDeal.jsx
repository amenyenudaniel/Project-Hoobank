import "./CardDeal.css";
import { card } from "../../assets";
import Button from "../button/Button";
const CardDeal = () => (
  <section className="cardDeal">
    <div className="cardDeal__info">
      <h2>Find a Better card deal in few easy steps.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo
        ullam quod rerum corrupti ducimus?Lorem ipsum dolor sit amet.
      </p>
      <Button />
    </div>

    <div className="cardDeal__img">
      <img src={card} alt="card" />
      <div className="card-gradient blue__gradient"></div>
    </div>
  </section>
);

export default CardDeal;
