import React from "react";
import { withRouter } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchWeightBmi } from "../../actions/weightbmi";
import { HashLoader} from 'react-spinners';
import { fetchAllWaterDates } from "../../actions/water";
import './progress.css';
export class Progress extends React.Component {
 constructor(props){
   super(props);
   
   this.state= {
     weight:  null,
     month:  null,
     dates: null,
     water: null
   }
 }
 componentWillMount() {
  this.props.dispatch(fetchWeightBmi(this.props.id))
  .then(()=> this.setState({
    weight: this.props.weightBmi.map(a => a.weight),
    month: this.props.weightBmi.map(a => a.month)
  }));
  this.props.dispatch(fetchAllWaterDates(this.props.id))
  .then(()=>this.setState({
    dates: this.props.allWaterData.map(a => a.date),
    water: this.props.allWaterData.map(a => a.waterIntake)
  }))
}


  render(){
    if(this.state.weight && this.state.month && this.state.dates && this.state.water !== null){
    const data = {
      labels: this.state.month,
      datasets: [
        {
          label: "Your Weight Progress",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#C96A52",
          borderColor: "#C96A52",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#C96A52",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#C96A52",
          pointHoverBorderColor: "#C96A52",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.weight
        }
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };

 const data2 = {
  labels: this.state.dates,
  datasets: [
    {
      label: "Your Water Intake Progress",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#48C4E2",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: this.state.water
    }
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
};
   
    return(
      <div className="chart-container">
      <Line data={data} />
      <Line data={data2} />
    </div>
    );
  }
  return<div className="spinner-container"> <HashLoader
  color={'#CF7553'} /></div>;
  }
}
    

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    id: `${currentUser.id}`,
    weightBmi: state.weightBmi.data,
    isDeleting: state.weightBmi.isDeleting,
    isFetching: state.weightBmi.isFetching,
    allWaterData: state.water.allWaterData
  };
};

export default requiresLogin()(connect(mapStateToProps)(withRouter(Progress)));
