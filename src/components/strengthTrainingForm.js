import React from 'react';
import Input from './input';
import {withRouter} from 'react-router-dom';
import {Field, reduxForm, focus, FieldArray} from 'redux-form';
import {addEventsData} from '../reducers/events';
import {required, nonEmpty} from '../validators';
import validate from './validate';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import Select from './select';
import {makeDateFromISOString} from '../utils';
import './strengthTrainingForm.css';
export class StrengthTrainingForm extends React.Component {
constructor(props){
    super(props);
    this.state = {
        counter: 1
    }
}
onSubmit(values){
    const creator = this.props.id;
    const start = makeDateFromISOString(new Date(values.start).toISOString());
    const end = start;
    const {title} = values;
    const strengthExercise =[];
    for(var i=1; i<this.state.counter; i++){
    const name = values['strengthExercisetitle'+ i] 
    const reps = values['reps' + i]
    const sets = values['sets' + i]
    const titleRepSetObj = {name, reps, sets}
    strengthExercise.push(titleRepSetObj);
    }
    const exercise = {creator, title, start, end, strengthExercise};
    this.props.dispatch(addEventsData(exercise))
   .then(()=> {this.props.history.push('/dashboard')});   
}
addmorefields(){
    this.setState({counter: this.state.counter + 1});
    console.log(this.state.counter);
}



render(){

    let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
    }
    let count = this.state.counter;
    let duplicatedFields = [];
    for (let i=1; i<count; i++) {
        duplicatedFields.push(
                <div key={i}>
                    
                    <label htmlFor="strengthExercisetitle">Strength Exercise Name</label>
                    <Field 
                        component={Input}
                        type="text"
                        name={"strengthExercisetitle" + i}
                        id={"strengthExercisetitle" + i}
                        validate={[required, nonEmpty]}
                    /> 
                    <label>Reps</label>
                    <Field
                        type="text"
                        id={"reps"+ i}
                        name={"reps" +i}
                        component={Select}
                        options={{
                        "5 reps": '5 reps', 
                        "10 reps": '10 reps', 
                        "15 reps": '15 reps', 
                        "20 reps": '20 reps', 
                        "max reps": 'max reps'  

                        }}
                        valueField="value"
                    />  
                    <label>Sets</label>
                    <Field
                        type="text"
                        id={"sets" +i}
                        name={"sets" +i}
                        component={Select}
                        options={{
                        "1 set": '1 set', 
                        "2 sets": '2 sets', 
                        "3 sets": '3 sets', 
                        "4 set": '4 set',
                        "5 set": '5 set', 
                        "6 set": '6 set',
                        "7 set": '7 set',
                        "8 set": '8 set',
                        "9 set": '9 set',
                        "10 set": '10 set'
                        }}
                        valueField="value"
                    />
                </div>);
    }
    return(
        <div className="exercise-form-container-strength">
        <h1>Enter the details for Strength Exerciseeee</h1>
        
        <form
            className="strengthexercise"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
            {error}
            <label>Day</label>
            <Field
                type="text"
                id="title"
                name="title"
                component={Select}
                options={{
                "Shoulder Day": 'Shoulder Day', 
                "Back Day":'Back Day', 
                "Legs Day": 'Legs Day',
                "Abs Day": 'Abs Day', 
                "Arms Day": 'Arms Day', 

                }}
                valueField="value"
            /> 
            <label htmlFor="start">Date</label>
            <Field 
                        component={Input}
                        type="Date"
                        name= "start"
                        id="start"
                        validate={[required, nonEmpty]}
                    />
            <button onClick={()=>this.addmorefields()}>Add More</button>
            {duplicatedFields}
            <button disabled={this.props.pristine || this.props.submitting}>
            submitting
            </button>
        </form>
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
    form: 'strengthexercise',
    onSubmitFail: (errors, dispatch) => dispatch(focus('strengthexercise', 'title'))
})(withRouter(StrengthTrainingForm))));