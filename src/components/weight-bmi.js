import React from 'react';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {addWeightBmi} from '../reducers/weightbmi';
export class WeightAndBmiForm extends React.Component {
    onSubmit(values){

        const {weight, bmi, creator, month} = values;
        const userWeightBmi = {weight, bmi, creator, month};
        return this.props
                .dispatch(addWeightBmi(userWeightBmi))
                .then(alert('form submitted'))
                
    }
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="weight-bmi-form-container">
            <button className="display-weight-bmi"
                    onClick={() => {this.props.history.push('/display-weight-bmi')}}> Display your weight bmi logs
                </button>
            <button onClick={() => this.props.history.push('/dashboard')}> Go back to Dashboard </button>
            <form
                className="weight-bmi-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="weight">Enter your weight</label>
                <Field 
                    component={Input}
                    type="number"
                    name="weight"
                    id="weight"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="bmi">BMI</label>
                <Field 
                    component={Input}
                    type="number"
                    name="bmi"
                    id="bmi"
                    validate={[required, nonEmpty]}
                />
                
                <label htmlFor="creator">Creator</label>
                <Field 
                    component={Input}
                    type="text"
                    name="creator"
                    id="creator"
                    validate={[required, nonEmpty]}>
                   
                </ Field>
               
               
                <label htmlFor="month">Month</label>
                <Field 
                    component={Input}
                    type="text"
                    name="month"
                    id="month"
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


export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'weightBmi',
    onSubmitFail: (errors, dispatch) => dispatch(focus('weightBmi', 'weight'))
})(WeightAndBmiForm)));