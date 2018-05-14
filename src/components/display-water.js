import React from 'react';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import {fetchWater} from '../reducers/water';
import EmptyBottle from './empty-bottle.png';
import Glass1 from './glass1.png';
import Glass2 from './glass2.png';
import Glass3 from './glass3.png';
import Glass4 from './glass4.png';
import Glass5 from './glass5.png';
import Glass6 from './glass6.png';
import Glass7 from './glass7.png';
import Glass8 from './glass8.png';
import './display-water.css';




export class DisplayWater extends React.Component {
    
    componentWillMount() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//January is 0!`    
        var yyyy = today.getFullYear();
        if(dd<10){dd='0'+dd}
        if(mm<10){mm='0'+mm}
        let todaysDate = mm+''+dd+''+yyyy;  
        console.log(todaysDate);    
        this.props.dispatch(fetchWater(this.props.id+todaysDate)); 
    }
render(){
    if(this.props.singleDayIntake === "1 cup"){
        return (
            <div className="bottle" >
            <img src={Glass1}  />
            </div>
        );
    }
    else if(this.props.singleDayIntake === "2 cups"){
        return (<div className="bottle" >
        <img src={Glass2}   />
        </div>);
    }else if(this.props.singleDayIntake === "3 cups"){
        return (<div className="bottle" >
        <img src={Glass3}  />
        </div>);
    }else if(this.props.singleDayIntake === "4 cups"){
        return (<div className="bottle" >
        <img src={Glass4}   />
        </div>);
    }else if(this.props.singleDayIntake === "5 cups"){
        return (<div className="bottle" >
        <img src={Glass5}   />
        </div>);
    }else if(this.props.singleDayIntake === "6 cups"){
        return (
            <div className="bottle" >
            <img src={Glass6}  />
            </div>);
    }else if(this.props.singleDayIntake === "7 cups"){
        return (<div className="bottle" >
        <img src={Glass7}  />
        </div>);
    }else if(this.props.singleDayIntake === "8 cups"){
        return (<div className="bottle" >
        <img src={Glass8}   />
        </div>);
    }
    else {
        return ( <div className="bottle" >
        <img src={EmptyBottle}   />
        </div>)
    }
}

}


const mapStateToProps = state => {
    const {currentUser} = state.auth;
    if(state.water.singleDayIntake !== null){
        return {
            singleDayIntake: state.water.singleDayIntake,
            username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`
        }
    }else {
        return {
            singleDayIntake: '0 cups',
            username: state.auth.currentUser.username,
            name: `${currentUser.firstName} ${currentUser.lastName}`,
            id: `${currentUser.id}`
        };
    }

    
    
};
export default requiresLogin()(connect(mapStateToProps)(DisplayWater));