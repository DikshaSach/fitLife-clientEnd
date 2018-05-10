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
export class StrengthTrainingForm extends React.Component {

onSubmit(values){
    const creator = this.props.id;
    const start = makeDateFromISOString(new Date(values.start).toISOString());
    const titleOfStrengthExercise = values.strengthExercisetitle
    const reps = values.reps;
    const sets = values.sets;
    const strengthExercise = {titleOfStrengthExercise, reps, sets}
    const {title} = values;
    const end = start;
    const exercise = {title, creator, start, end, strengthExercise};
    this.props.dispatch(addEventsData(exercise))
    .then(()=> {this.props.history.push('/dashboard')});
    
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
    
    return(
        <div className="exercise-form-container">
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
                "Shoulder": 'Shoulder', 
                "Back":'Back', 
                "Legs": 'Legs',
                "Abs": 'Abs', 
                "Arms": 'Arms', 

                }}
                valueField="value"
            /> 
            <label htmlFor="start">Date</label>
            <Field 
                component={Input}
                type="Date"
                name="start"
                id="start"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="strengthExercisetitle">Strength Exercise Name</label>
            <Field 
                component={Input}
                type="text"
                name="strengthExercisetitle"
                id="strengthExercisetitle"
                validate={[required, nonEmpty]}
            /> 
             <label>Reps</label>
            <Field
                type="text"
                id="reps"
                name="reps"
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
                id="sets"
                name="sets"
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