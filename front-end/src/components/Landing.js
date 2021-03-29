import "../components/CSS/Landing.css";
import plant1 from "../components/images/plant1.PNG";
import plant2 from "../components/images/plant2.png";
import plant3 from "../components/images/plant3.png";
import logo from "../components/images/logo.png";

export default function Landing() {
  return (
    <div className="main">
      <div className="middle">
        <div className="banner">
          <div className="banner-container">
            <div className="imgcont">
              <img src={logo} alt="" />
            </div>
            <div className="bannertext">
              <span>
                WaterMyPlants makes it easy to designate the amount of times you
                water specific plants per day, so that you can better and more
                effectively manage your time and ensure that your plants get
                watered when they need to.
              </span>
            </div>
          </div>
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
              Create your plants and designate their water frequencies to ensure
              that you keep your plants healthy.
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
              <img src={plant3} alt="" />
            </div>
          </div>
          <div className="para3">
            <p>
              Your plants get watered <br />
              when they need to, <br />
              without even thinking about it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
