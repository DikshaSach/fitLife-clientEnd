import React from 'react';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {addWeightBmi} from '../reducers/weightbmi';
import Select from './select';
import './weight-bmi.css';

export class WeightAndBmiForm extends React.Component {
    onSubmit(values){
        const creator = this.props.id;
        const height = this.props.height;
        const convertWeight = (values.weight * 0.45);
        const convertHeight = (height * 0.025);
        const heightSquared = (convertHeight* convertHeight);
        const bmi = Math.round(convertWeight/heightSquared);
       const {weight,  month} = values;
        const userWeightBmi = {weight, bmi, creator, month};
        this.props.dispatch(addWeightBmi(userWeightBmi));

        this.props.history.push('/display-weight-bmi');

                
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
            <h1>Enter the details below:</h1>
            <form
                className="weight-bmi-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="month">Month</label>
                <Field 
                    type="text"
                    name="month"
                    id="month"
                    component={Select}
                    options={{
                    "January": 'January', 
                    "February":'February', 
                    "March": 'March',
                    "April": 'April', 
                    "May": 'May', 
                    "June": 'June',
                    "July": 'July',
                    "August": 'August',
                    "September": 'September',
                    "October": 'October',
                    "November": 'November',
                    "December": 'December'
                    }}
                    valueField="value"
                />
                <label htmlFor="weight">Enter your weight</label>
                <Field 
                    component={Input}
                    type="number"
                    name="weight"
                    id="weight"
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
        id: `${currentUser.id}`,
        isFetching: state.weightBmi.isFetching,
        height: `${currentUser.height}`
    };
};


export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'weightBmi',
    onSubmitFail: (errors, dispatch) => dispatch(focus('weightBmi', 'weight'))
})(WeightAndBmiForm)));