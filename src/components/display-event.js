import React from 'react';
import requiresLogin from './requires-login';
import {connect} from 'react-redux';
export class DisplayEvent extends React.Component {
render(){
    return(
        <div>
            <h1>Single Event Id</h1>
        </div>
    );
}

}

const mapStateToProps = state => {
   
  };
  
export default requiresLogin()(connect(mapStateToProps)(DisplayEvent));