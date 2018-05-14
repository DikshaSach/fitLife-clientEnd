import React from 'react';
import Input from './input';
import {withRouter} from 'react-router-dom';
import {Field, reduxForm, focus, FieldArray} from 'redux-form';
import {addEventsData} from '../actions/events';
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
    const titleOfStrengthExercise1 = values.titleOfStrengthExercise1;
 
    const {title} = values;
    const end = start;
    const exercise = {title, creator, start, end};
    this.props.dispatch(addEventsData(exercise))
   .then(()=> {this.props.history.push('/dashboard')});   
}
addmorefields(){
    this.setState({counter: this.state.counter + 1});
    console.log(this.state.counter);
}

render(){

    const FieldArraysForm = (props) => {
        const { array: { push }, handleSubmit, pristine, reset, submitting } = props

    return(
        <form onSubmit={handleSubmit}>
      <div>
        <label>Club Name</label>
        <Field name="clubName" key="clubName" component={clubName =>
          <div>
            <input type="text" {...clubName} placeholder="Club Name"/>
            {clubName.touched && clubName.error && <span>{clubName.error}</span>}
          </div>
        }/>
      </div>
      <FieldArray name="members" component={members =>
        <ul>
          <li>
            <button type="button" onClick={() => push('members', {})}>Add Member</button>
          </li>
          {members.map((member, memberIndex) =>
            <li key={memberIndex}>
              <button
                type="button"
                title="Remove Member"
                onClick={() => members.remove(memberIndex)}/>
              <h4>Member #{memberIndex + 1}</h4>
              <div>
                <label>First Name</label>
                <Field name={`${member}.firstName`} component={firstName =>
                  <div>
                    <input type="text" {...firstName} placeholder="First Name"/>
                    {firstName.touched && firstName.error && <span>{firstName.error}</span>}
                  </div>
                }/>
              </div>
              <div>
                <label>Last Name</label>
                <Field name={`${member}.lastName`} component={lastName =>
                  <div>
                    <input type="text" {...lastName} placeholder="Last Name"/>
                    {lastName.touched && lastName.error && <span>{lastName.error}</span>}
                  </div>
                }/>
              </div>
              <FieldArray name={`${member}.hobbies`} component={hobbies =>
                <ul>
                  <li>
                    <button type="button" onClick={() => hobbies.push()}>Add Hobby</button>
                  </li>
                  {hobbies.map((hobby, hobbyIndex) =>
                    <li key={hobbyIndex}>
                      <button
                        type="button"
                        title="Remove Hobby"
                        onClick={() => hobbies.remove(hobbyIndex)}/>
                      <div>
                        <Field name={hobby} component={hobbyProps =>
                          <div>
                            <input type="text" {...hobbyProps} placeholder={`Hobby #${hobbyIndex + 1}`}/>
                            {hobbyProps.touched && hobbyProps.error && <span>{hobbyProps.error}</span>}
                          </div>
                        }/>
                      </div>
                    </li>
                  )}
                  {hobbies.error && <li className="error">{hobbies.error}</li>}
                </ul>
              }/>
            </li>
          )}
        </ul>
      }/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
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