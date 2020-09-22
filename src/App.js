import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import Projects from './Projects';
import Technologies from './Technologies';
import Contact from './Contact';
import { dev_logo } from './images/import_photos';

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <div id="main-logo">
          <img src={dev_logo} alt="Developer Logo"></img>
        </div>

        <div id="about">
          <h1>Hello, I am Iulian.</h1>
          <h1>I design websites.</h1>
        </div>
        <Technologies />
        <hr></hr>
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;






































