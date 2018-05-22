import React from "react";
import "./footer.css";
import GithubLogo from '../../images/githublogo.png';

export class Footer extends React.Component {
  render() {
    return (
    <p className="footer-text"> 
    <a href='https://github.com/DikshaSach/fitLife-backend'> Server</a> 
    &nbsp;
    <img className="github-logo" src={GithubLogo} alt="github logo"/>
    <a href="https://github.com/DikshaSach/fitLife-clientEnd"> Client</a> 
    <br/> 
      Diksha Sach  </p>
    );
  }
}
export default Footer;
