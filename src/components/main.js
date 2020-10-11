import React, { Component } from 'react';
import headerPhoto from '../assets/header-photo.jpg';
import coin from '../assets/coin.svg'
import './main.css';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="header-second">
                    <div className="header-content">
                        <p className="welcome-title">
                            Welcome to the school of the future.
                        </p>
                        <p className="subTitle">
                            Cutting-edge technology courses for Ages 8 - 18. Unlock 
                            <span className="text-yellow"> 21st century skills</span>, 
                            earn <img className="coin" src={coin} alt="coin" />, and build a college-ready portfolio as you learn.
                        </p>
                    </div>
                    <div className="header-photo-right">
                        <img className="header-pic" src={ headerPhoto } alt="header-pic" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Main;