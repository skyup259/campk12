import React, { Component } from 'react';
import logo from '../assets/camp-k-12-logo.svg';
import leaderboard from '../assets/leaderboard.svg';
import skill from '../assets/skill-icon.svg';
import downArrow from '../assets/shape.svg';
import notification from '../assets/group-36.svg';
import Profile from '../assets/profile.png';
import './header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-light justify-content-between">
                    <a href="#!" className="navbar-brand">
                        <img src={logo} alt="Logo" />
                    </a>
                    <form className="form-inline">
                    <img className="leaderboard" src={leaderboard} alt="leaderboard" />
                    <img className="notification" src={notification} alt="notification" />
                    <div className="navRight">
                        <img src={skill} alt="skills" className="skill-icon" />
                        <p className="skill-count">
                            100
                        </p>
                        <img src={Profile} alt="profile" className="profile" />
                    </div>
                    <img className="downArrow" src={downArrow} alt="downArrow" />
                    </form>
                </nav>
          </React.Fragment>
         );
    }
}
 
export default Header;