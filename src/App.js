import React from 'react';
import './App.css';
import Header from './components/header.js'
import Main from './components/main.js'
import Slider from './components/slider.js'
import Courses from './components/courses.js'
import Footer from './components/footer.js'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header/>
        <Main />
        <Slider />
        <Courses />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
