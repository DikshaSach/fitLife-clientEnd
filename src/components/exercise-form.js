import React from 'react';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import {addEventsData} from '../reducers/events';
import {required, nonEmpty} from '../validators';
export class ExerciseForm extends React.Component {
    onSubmit(values){
        const {title, creator, start, end} = values;
        const exercise = {title, creator, start, end};
        return this.props
                .dispatch(addEventsData(exercise))
                .then(alert('form submitted'))
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
        <button onClick={() => this.props.history.push('/dashboard')}> Go back to Dashboard </button>
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
            <label htmlFor="creator">Creator</label>
            <Field 
                component={Input}
                type="text"
                name="creator"
                id="creator"
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
export default reduxForm({
    form: 'exercise',
    onSubmitFail: (errors, dispatch) => dispatch(focus('exercise', 'title'))
})(ExerciseForm);