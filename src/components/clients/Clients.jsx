import "./Clients.css";
import { clients } from "../../data";
const Clients = () => (
  <section className="clients">
    <div className="client__img">
      {clients.map((client) => (
        <div key={client.id} className="client__images">
          <img src={client.logo} alt="client" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
