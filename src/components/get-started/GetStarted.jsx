import "./GetStarted.css";
import { arrowUp } from "../../assets";
const GetStarted = () => {
  return (
    <a href="#features">
      <div className="get__started-container bg-blue-gradient">
        
        <div className="round__btn">
          <div className="get__started__content">
            <p>
              <span className="text-gradient">Get</span>
            </p>
            <img src={arrowUp} alt="arrow" className="arrow" />
          </div>
          <p className="text-gradient p__start">Started</p>
        </div>
      </div>
    </a>
  );
};

export default GetStarted;
