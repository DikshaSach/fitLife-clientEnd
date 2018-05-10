import React from 'react';

import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import StrengthTrainingForm from './strengthTrainingForm';
import CustomExerciseForm from './custom-exercise-form';
import './exercise-form.css';
export class ExerciseForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customExerciseClicked: false,
            strengthTrainingClicked: false
        }
    }
    showcustom(){
        console.log('In Show custom exercise Form method');
        this.setState({
            customExerciseClicked: true
        });
    }
    showRepSetsForm(){
        console.log('in show rep sets method');
        this.setState({
            strengthTrainingClicked: true
        })
    }
    resetState(){
        this.setState({
            customExerciseClicked: false,
            strengthTrainingClicked: false 
        });
    }
render(){
    if(this.state.customExerciseClicked === true){
        return ( 
            <div className="custom-exercise-form-container"> 
            <CustomExerciseForm /> 
            <button className="exercise-form-cancel" onClick={()=> this.resetState()}>Cancel</button>
            </div>
            )
    }else if(this.state.strengthTrainingClicked === true){
        return (
            <div className="strength-exercise-form-container"> 
            <StrengthTrainingForm/>
            <button className="exercise-form-cancel"  onClick={()=> this.resetState()}>Cancel</button>
            </div>)
    }
    return(
        <div>
            <h1 className="exercise-form-title">What kind of Exercise do you want to log?</h1>
            <div className="exercise-form-btn-container">
        <button className="exercise-form-btn-custom" onClick={()=> this.showcustom()}>Custom Exercise</button>
        <button className="exercise-form-btn-strength" onClick={() => this.showRepSetsForm()}>Add Strength Training Exercise </button>
        </div>
        </div>
    );
}
}


const mapStateToProps = state => {
    
    const {currentUser} = state.auth;
    return {
        id: `${currentUser.id}`
    };
};

export default  requiresLogin()(connect(mapStateToProps)(ExerciseForm));