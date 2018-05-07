import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWeightBmi} from '../reducers/weightbmi';
import {deleteWeightBmi} from '../reducers/weightbmi';
export class DisplayWeightBmi extends React.Component{
    componentDidMount(){
        console.log(this.props.id);
        this.props.dispatch(fetchWeightBmi(this.props.id));
    }
    handleClick(id) {
        console.log(id);
         this.props.dispatch(deleteWeightBmi(id));
        if(this.props.isDeleting === false){
           return this.props.history.push('/display-weight-bmi');
        }
    }
  
    render(){
    

        
            const userWeightBmiData = this.props.weightBmi;


        
        return(
            
            <div className="displayweightbmi-container">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                
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
        isDeleting: state.weightBmi.isDeleting,
        isFetching: state.weightBmi.isFetching
    };
};
export default requiresLogin()(connect(mapStateToProps)(DisplayWeightBmi));