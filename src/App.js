import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import Projects from './Projects';
import Technologies from './Technologies';
import Contact from './Contact';
import { dev_logo } from './images/import_photos';
import { useState, useEffect } from 'react';

function App() {

  const [visited, setVisited] = useState(true);

  function handleChange() {

  }
  useEffect(() => {
    if (localStorage.getItem('visited') == null) {
      localStorage.setItem('visited', true);
      console.log(localStorage.getItem('visited'));
      setVisited(prev => false);
    }

  }, []);



  return (
    <div className={'App ' + (visited ? '' : 'fadeIn')} onChange={handleChange}>
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






































