import React from 'react';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import {addEventsData} from '../reducers/events';
import {required, nonEmpty} from '../validators';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
export class CustomExerciseForm extends React.Component {
    onSubmit(values){
        const creator = this.props.id;
        
        const formattedStartTime = new Date(2018, 5, 20, 5, 30, 0, 0);
        const formattedEndTime = new Date(2018, 5, 20, 5, 30, 0, 0);
        const {title} = values;
        const exercise = {title, creator, formattedStartTime, formattedEndTime};
        this.props.dispatch(addEventsData(exercise))
        this.props.history.push('/dashboard');
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
            className="exercise-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
            {error}
            <label htmlFor="title">Title</label>
            <Field 
                component={Input}
                type="text"
                name="title"
                id="title"
                validate={[required, nonEmpty]}
            />           
            <label htmlFor="start">start</label>
            <Field 
                component={Input}
                type="Date"
                name="start"
                id="start"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="end">End</label>
            <Field 
                component={Input}
                type="Date"
                name="end"
                id="end"
                validate={[required, nonEmpty]}
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
    form: 'customexercise',
    onSubmitFail: (errors, dispatch) => dispatch(focus('customexercise', 'title'))
})(CustomExerciseForm)));