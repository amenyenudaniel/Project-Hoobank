import { stats } from "../../data";
import "./Stats.css";
const Stats = () => {
  return (
    <section className="stats__section">
      {stats.map((stat) => (
        <div key={stat.id} className="stats__content">
          <h4>{stat.value}</h4>
          <p className="text-gradient uppercase">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
