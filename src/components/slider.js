import React, { Component } from 'react';
import './slider.css';
import leftArrow from '../assets/leftarrow.svg';
import rightArrow from '../assets/rightarrow.svg';

class Slider extends Component {
    state = { 
        Slidernames: [
            {id: 1, title: 'Web Development', path: require('../assets/webapp.svg')},
            {id: 2, title: 'Mobile App Development', path:  require('../assets/mobileapp.svg')},
            {id: 3, title: 'Mixed Reality (AR/VR)', path:  require('../assets/arvr.svg')},
            {id: 4, title: 'Machine Learning (AI)', path:  require('../assets/ml.svg')}
        ]
     }
    render() { 
        return (  
            <React.Fragment>
               <div>
                   <div className="slider-title">
                        <p>What do you want to learn?</p>
                   </div>
                   <div className="slider">
                        <div className="slider-left-arrow">
                            <img className="leftArrow" src={leftArrow} alt="leftArrow" />
                        </div>
                   </div>
                   {this.state.Slidernames.map(name => (
                   <div className="card" key={name.id}>
                        <div className="card-body">
                            <img className="webapp" src={name.path} alt="webapp" />
                            <p className="card-text">{name.title}</p>
                        </div>
                    </div>
                    ))}
                    <div className="slider">
                        <div className="slider-right-arrow">
                            <img className="rightArrow" src={rightArrow} alt="rightArrow" />
                        </div>
                   </div>
               </div>
          </React.Fragment>
        );
    }
}
 
export default Slider;