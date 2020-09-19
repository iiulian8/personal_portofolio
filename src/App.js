import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import Projects from './Projects';
import Technologies from './Technologies';
import {dev_logo} from './images/import_photos';
function App() {


  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <div id="title">
          <h1>Julian portofolio</h1>
          <div id="main-logo">
            <img src={dev_logo} alt = "logo"></img>
          </div>
        </div>
        <div id="about">
          <p1>My name is Iulian Oprea, I am an UK based web developer with a strong passion for building reliable and visually-pleasing websites.</p1>
          <p1>My mission is to make sure that every client is treated with respect and that the job is done in the fastest and most efficient way possible.</p1>
          <p1>With an experience of 0 years, you can expect best practices to be respected and great satisfaction.</p1>
        </div>
        <Projects/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
