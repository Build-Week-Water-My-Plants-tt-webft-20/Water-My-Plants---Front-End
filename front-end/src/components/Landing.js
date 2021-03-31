import "../components/CSS/Landing.css";
import plant1 from "../components/images/plant1.PNG";
import plant2 from "../components/images/plant2.png";
import plant3b from "../components/images/plant3b.png";

export default function Landing() {
  return (
    <div className="main">
      <div className="middle">
        <div className="banner">
          <div className="bannertext">
            <span className="btext">
              WaterMyPlants helps you manage your time, so you can help your
              plants thrive!
            </span>
          </div>
          <a className="water" href="#">
            <span className="water-button">Get Started</span>
            <div class="liquid"></div>
          </a>
         
        </div>

        <div className="works1">
          <div className="step1">
            <h1>Step 1</h1>
            <div className="image">
              <img src={plant1} alt="" />
            </div>
          </div>
          <div className="para1">
            <p>
              Start by <br />
              clicking the <br />
              Sign Up Button!
            </p>
          </div>
        </div>
        <div className="works2">
          <div className="para2">
            <p>
              List your varieties of plants, when they need watering, and how
              much water to give them.
            </p>
          </div>
          <div className="step2">
            <h1>Step 2</h1>
            <div className="image">
              <img src={plant2} alt="" />
            </div>
          </div>
        </div>
        <div className="works3">
          <div className="step3">
            <h1>Step 3</h1>
            <div className="image">
              <img src={plant3b} alt="" />
            </div>
          </div>
          <div className="para3">
            <p>
              Receive alerts to remind you when each plant needs watering.
              {/* Your plants get watered <br />
              when they need to, <br />
              without even thinking about it. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
