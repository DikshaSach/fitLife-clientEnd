import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWeightBmi} from '../reducers/weightbmi';
import {deleteWeightBmi} from '../reducers/weightbmi';
export class DisplayWeightBmi extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchWeightBmi(this.props.id));
    }
    handleClick(id) {
        console.log(id);
         this.props.dispatch(deleteWeightBmi(id));
         
    }
    render(){
        const userWeightBmiData = this.props.weightBmi;

        return(
            
            <div className="displayweightbmi-container">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <button onClick={() => this.props.history.push('/dashboard')}> Go back to Dashboard </button>
                <button className="display-weight-bmi"
                    onClick={() => {this.props.history.push('/weight-bmi-form')}}> Add your weight and bmi for this month
                </button>
                <ul>
                    {
                        userWeightBmiData.map((eachItem, index) => {

                            return (
                                <li key ={`item-${index}`}>
                                Weight:
                                {eachItem.weight}
                                {' '}
                                Bmi: 
                                {eachItem.bmi}
                                {' '}
                                Month: 
                                {eachItem.month}
                                <button onClick={() => this.handleClick(eachItem._id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`,
        weightBmi: state.weightBmi.data,
    };
};
export default requiresLogin()(connect(mapStateToProps)(DisplayWeightBmi));