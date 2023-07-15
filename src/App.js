import "./App.css";
import {
  Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="others">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
