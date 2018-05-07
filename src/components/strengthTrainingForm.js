import React from 'react';
import Input from './input';
import {withRouter} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {addEventsData} from '../reducers/events';
import {required, nonEmpty} from '../validators';

import requiresLogin from './requires-login';
import {connect} from 'react-redux';
export class StrengthTrainingForm extends React.Component {
    constructor(props){
        super(props);
        this.onDashboardClicked = this.onDashboardClicked.bind(this);
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
       <h1>Hello</h1>
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