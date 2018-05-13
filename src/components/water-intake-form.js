import React from 'react';
import Input from './input';
import {withRouter} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {addWater} from '../reducers/water';
import {required, nonEmpty} from '../validators';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import {makeDateFromISOString} from '../utils';
import Select from './select';
export class WaterIntakeForm extends React.Component {
    onSubmit(values){
        const creator = this.props.id;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//January is 0!`    
        var yyyy = today.getFullYear();
        if(dd<10){dd='0'+dd}
        if(mm<10){mm='0'+mm}
        let waterDate = mm+''+dd+''+yyyy;
        const {waterIntake} = values;
        let id =(creator+waterDate);
        const waterObj = {waterIntake, waterDate, creator, id};
        this.props.dispatch(addWater(waterObj))       
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
        <div className="water-intake-form-container">
        <h1>Enter water</h1>
        <form
            className="water-intake-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
            {error}
            <label htmlFor="water">How many glasses of water?</label>
            <Field
                type="text"
                id="waterIntake"
                name="waterIntake"
                component={Select}
                options={{
                "1 cup": '1 cup', 
                "2 cups":'2 cups', 
                "3 cups": '3 cups',
                "4 cups": '4 cups', 
                "5 cups": '5 cups', 
                "6 cups": '6 cups',
                "7 cups": '7 cups', 
                "8 cups": '8 cups',
                "9 cups": '9 cups', 
                "10 cups": '10 cups'
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
        form: 'waterIntake',
        onSubmitFail: (errors, dispatch) => dispatch(focus('waterIntake', 'water'))
    })(withRouter(WaterIntakeForm))));