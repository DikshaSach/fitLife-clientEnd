import React from 'react';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import {addEventsData} from '../reducers/events';
import {required, nonEmpty} from '../validators';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import StrengthTrainingForm from './strengthTrainingForm';
import CustomExerciseForm from './custom-exercise-form';
export class ExerciseForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customExerciseClicked: false,
            strengthTrainingClicked: false
        }
    }
    showcustom(){
        console.log('in method');
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
            <div> 
            <CustomExerciseForm /> 
            <button onClick={()=> this.resetState()}>Cancel</button>
            </div>
            )
    }else if(this.state.strengthTrainingClicked === true){
        return (
            <div> 
            <StrengthTrainingForm/>
            <button onClick={()=> this.resetState()}>Cancel</button>
            </div>)
    }
    return(
        <div>
        <button onClick={()=> this.showcustom()}>Custom Exercise</button>
        <button onClick={() => this.showRepSetsForm()}>Add Strength Training Exercise </button>
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

export default  requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'exercise',
    onSubmitFail: (errors, dispatch) => dispatch(focus('exercise', 'title'))
})(ExerciseForm)));