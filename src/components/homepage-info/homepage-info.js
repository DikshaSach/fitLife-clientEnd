import React from "react";
import exercise from "../../images/exercise.png";
import hydration from "../../images/hydration.png";
import weight from "../../images/weight.png";
import Footer from "../footer/footer";

import Homepagekettlebell from "../../images/homepagekettlebell.png";
import "./homepage-info.css";
export class HomepageInfo extends React.Component {
  render() {
    return (
      <div className="homepage-info">
      
        <div className="keys-to-success">
          <h1>
            Track and log your workouts , water-intake and weight to make sure
            you make the best of today. For a better tomorrow!
          </h1>
        </div>
        <div><img src={Homepagekettlebell}  alt="kettlebell icon" width="100%" height="auto"/></div>
        <div className="container-for-info-divs">
          <div className="first-container">
            <h1>Hydration</h1>
            <img
              className="hydration"
              alt="hydration"
              src={hydration}
              height="80"
              width="100"
            />
            <p>
              Water helps all of your bodily functions. It improves your health,
              fitness, weight control, mood and even your energy levels.
            </p>{" "}
          </div>
          <div className="second-container">
            <h1>Exercise</h1>
            <img
              className="exercise"
              alt="exercise"
              src={exercise}
              height="80"
              width="90"
            />
            <p>
              Exercise is an important part of a healthy lifestyle. Exercise
              prevents health problems, builds strength, boosts energy, and can
              help you reduce stress. It can also help you maintain a healthy
              body weight and curb your appetite.
            </p>
          </div>

          <div className="third-container">
            <h1>Weight</h1>
            <img
              className="weight"
              alt="weight"
              src={weight}
              height="80"
              width="100"
            />
            <p>
              Controlling your weight helps you stay healthy now and in the
              future.
            </p>
          </div>
          <br />
        </div>

        <Footer />
      </div>
    );
  }
}
export default HomepageInfo;
