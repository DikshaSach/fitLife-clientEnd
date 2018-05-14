import React from 'react';
import exercise from './exercise.png';
import hydration from './hydration.png';
import food from './food.png';
import weight from './weight.png';
import Footer from './footer';
import './homepage-info.css';
export class HomepageInfo extends React.Component {
    render(){
        return(
            <div className="homepage-info">
        <div className="keys-to-success">
            <h1>Track and log your workouts ,
             water-intake and weight to make sure you make the best of today</h1>
        </div>
      
        <div className="container-for-info-divs">

        <div className="first-container">
        <h1>Hydration</h1>
        <img className="hydration" src={hydration} height="80" width="100"/>
        <p>Water helps all of your bodily functions.  It improves your health, fitness, 
            weight control, mood and even your energy levels.
        </p> </div> 
        <div className="second-container">
        <h1>Exercise</h1>
        <img className="exercise" src={exercise} height="80" width="90"/>
        <p>
        Exercise is an important part of a healthy lifestyle. Exercise prevents health problems, builds strength, boosts energy, 
        and can help you reduce stress. It can also help you maintain a healthy body weight and curb your appetite.</p></div>
        
        <div className="third-container">
        <h1>Weight</h1>
        <img className="weight" src={weight} height="80" width="100"/>
        <p>
        Controlling your weight helps you stay healthy now and in the future.</p> 
        </div>
        <br />
        </div>
        
        <Footer/>
        </div>
        );
    }
}
export default HomepageInfo