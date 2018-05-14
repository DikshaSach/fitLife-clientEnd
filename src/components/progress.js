import React from 'react';
import {withRouter} from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWeightBmi} from '../reducers/weightbmi';
export class Progress extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchWeightBmi(this.props.id));
    }
    render(){
        const userWeightBmiData = this.props.weightBmi;
            const weight = userWeightBmiData.map(a => a.month);
            const month = userWeightBmiData.map(a => a.weight);
            console.log(month);
            console.log(weight);
        
       
    const data = {
        labels: [0],
        datasets: [
          {
            label: 'Weight',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0]
          }
        ]
      };

    return(<div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>);
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
            }
        };
    
   
        
 
export default requiresLogin()(connect(mapStateToProps)(withRouter(Progress)));