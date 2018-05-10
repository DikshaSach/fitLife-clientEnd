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
             water-intake and other activities to make sure you make the best of today</h1>
        </div>
        <div className="container-for-info-divs">

        <div className="first-container">
        <img className="hydration" src={hydration} height="auto" width="100"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p> </div> 
        <div className="second-container">
        <img className="exercise" src={exercise} height="auto" width="90"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p></div>
        
        <div className="third-container">
        <img className="weight" src={weight} height="auto" width="100"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.</p> 
        </div>
        <br />
        </div>
        <Footer/>
        </div>
        );
    }
}
export default HomepageInfo