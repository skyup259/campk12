import React, { Component } from 'react';
import './courses.css';
import Skill from '../assets/skill-icon.svg';
import Coin from '../assets/coin.svg';
import Grade from '../assets/grade.svg';
import Fill from '../assets/fill.svg';
import Stopwatch from '../assets/stopwatch.svg';
import Time from '../assets/time.svg';
import Calander from '../assets/calander.svg';

class Courses extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               <div>
                   <div className="course-title">
                       <div className="live-title">
                            <p>Upcoming online courses</p>
                       </div>
                        <div className="live-icon">
                            <div className="oval"></div>
                            <div className="live-text">
                                <p>LIVE</p>
                            </div>
                        </div>
                   </div>
                   <div>
                        <p className="course-subtitle">
                        Learn from live teachers, not pre-recorded videos, in our intelligent virtual classrooms.
                        </p>
                    </div>
                    <p className="course-subtitle-line2">
                        <img src={Skill} alt="skills" className="skillIcon" />= 21st century skills you’ll unlock
                        <img src={Coin} alt="coin" className="coinIcon" />= coins you’ll earn for completion
                    </p>
               </div>
               <div>
                <div className="card card-img" >
                    <div className="card-img-top">
                        <div className="course-name-box">
                            <p className="course-name">MOBILE APP</p>
                        </div>
                    </div>
                        <div className="card-body body-background">
                            <p className="course-Name">Android App Development Level 1</p>
                            <div className="shadow"></div>
                            <p className="course-grade">
                                <img src={Grade} alt="grade" className="gradeIcon" /> <span className="gradeText">GRADES</span>
                                <img src={Fill} alt="fill" className="fillIcon" /><span className="fillText">PRE-REQ </span>
                            </p>
                            <p className="course-value">
                                 <span className="value-range">4 - 8</span>
                                <span className="isValue">Yes</span>
                            </p>
                            <div className="shadow"></div>
                            <div className="skills">
                                <img src={Skill} alt="skill" className="SkillsIcon" />
                                <div className="skills-name">
                                    <p className="skill-names">ANDROID</p>
                                    <p className="skill-names skill-names2">UI/UX</p>
                                    <p className="skill-names skill-names2">+4</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="coins">
                                <img src={Coin} alt="Coins" className="coinsIcon" />
                                <div className="coins-name">
                                    <p className="coin-value">+1000</p>
                                </div>
                            </div>
                            <div className="shadow mt-5"></div>
                            <div className="start-date">
                                <div>
                                    <img src={Stopwatch} alt="Stopwatch" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                                <div className="timeIcon">
                                    <img src={Time} alt="Time" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                                <div className="timeIcon">
                                    <img src={Calander} alt="Calander" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                            </div>
                            <div className="shadow mt-2"></div>
                            <div className="price">
                                <p> <span className="price-value">Rs. 6,000</span> <span className="enroll">ENROLL</span></p>
                            </div>
                    </div>
                </div>
               </div>
               <div>
                <div className="card card-img card-img2" >
                    <div className="card-img-top card-img-top2">
                    <div className="course-name-box">
                        <p className="course-name">WEB DEVELOPMENT</p>
                    </div>
                    </div>
                        <div className="card-body body-background">
                            <p className="course-Name">Web Development Level 1</p>
                            <div className="shadow mt-36"></div>
                            <p className="course-grade">
                                <img src={Grade} alt="grade" className="gradeIcon" /> <span className="gradeText">GRADES</span>
                                <img src={Fill} alt="fill" className="fillIcon" /><span className="fillText">PRE-REQ </span>
                            </p>
                            <p className="course-value">
                                 <span className="value-range">4 - 12</span>
                                <span className="isValue">Yes</span>
                            </p>
                            <div className="shadow"></div>
                            <div className="skills">
                                <img src={Skill} alt="skill" className="SkillsIcon" />
                                <div className="skills-name">
                                    <p className="skill-names">ANDROID</p>
                                    <p className="skill-names skill-names2">CSS</p>
                                    <p className="skill-names skill-names2">+1</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="coins">
                                <img src={Coin} alt="Coins" className="coinsIcon" />
                                <div className="coins-name">
                                    <p className="coin-value">+1000</p>
                                </div>
                            </div>
                            <div className="shadow mt-5"></div>
                            <div className="start-date">
                                <div>
                                    <img src={Stopwatch} alt="Stopwatch" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                                <div className="timeIcon">
                                    <img src={Time} alt="Time" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                                <div className="timeIcon">
                                    <img src={Calander} alt="Calander" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                            </div>
                            <div className="shadow mt-2"></div>
                            <div className="price">
                                <p> <span className="price-value">Rs. 6,000</span> <span className="enroll">ENROLL</span></p>
                            </div>
                    </div>
                </div>
                <div className="card card-img card-img2" >
                    <div className="card-img-top card-img-top3">
                        <div className="course-name-box">
                            <p className="course-name">MIXED REALITY</p>
                        </div>
                    </div>
                        <div className="card-body body-background">
                            <p className="course-Name">Virtual Reality Level 1</p>
                            <div className="shadow mt-36"></div>
                            <p className="course-grade">
                                <img src={Grade} alt="grade" className="gradeIcon" /> <span className="gradeText">GRADES</span>
                                <img src={Fill} alt="fill" className="fillIcon" /><span className="fillText">PRE-REQ </span>
                            </p>
                            <p className="course-value">
                                 <span className="value-range">5 - 12</span>
                                <span className="isValue">Yes</span>
                            </p>
                            <div className="shadow"></div>
                            <div className="skills">
                                <img src={Skill} alt="skill" className="SkillsIcon" />
                                <div className="skills-name">
                                    <p className="skill-names">VR</p>
                                    <p className="skill-names skill-names2">JAVASCRIPT</p>
                                    <p className="skill-names skill-names2">+4</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="coins">
                                <img src={Coin} alt="Coins" className="coinsIcon" />
                                <div className="coins-name">
                                    <p className="coin-value">+1000</p>
                                </div>
                            </div>
                            <div className="shadow mt-5"></div>
                            <div className="start-date">
                                <div>
                                    <img src={Stopwatch} alt="Stopwatch" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                                <div className="timeIcon">
                                    <img src={Time} alt="Time" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                                <div className="timeIcon">
                                    <img src={Calander} alt="Calander" className="stopwatchIcon" />
                                    <p className="stopwatch-value">17th Feb (in 4 days)</p>
                                </div>
                            </div>
                            <div className="shadow mt-2"></div>
                            <div className="price">
                                <p> <span className="price-value">Rs. 6,000</span> <span className="enroll">ENROLL</span></p>
                            </div>
                    </div>
                </div>
               </div>
            </React.Fragment>
         );
    }
}
 
export default Courses;