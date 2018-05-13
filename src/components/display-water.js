import React from 'react';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
import {fetchWater} from '../reducers/water';



export class DisplayWater extends React.Component {
    
    componentWillMount() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//January is 0!`    
        var yyyy = today.getFullYear();
        if(dd<10){dd='0'+dd}
        if(mm<10){mm='0'+mm}
        let todaysDate = mm+''+dd+''+yyyy;
        (todaysDate);
      
        this.props.dispatch(fetchWater(this.props.id+todaysDate)); 
    }
render(){
 
    return(
        <div>
        <h1>Display Water</h1>
   {JSON.stringify(this.props.singleDayIntake)}
       
        </div>
    );
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