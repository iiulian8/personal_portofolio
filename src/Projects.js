import React from 'react';
import {useState} from 'react';
import {boostrap_logo, bootstrap_logo, css_logo, html_logo, javascript_logo, jquery_logo, php_logo, react_logo} from './images/import_photos';

function Projects() {
    const [clicked, setClicked] = useState('');

    return (
        <div id = "projects-cont">
            <div className = "projects-elm" id = "pro-1" value = "pro-1"> 
            <img src ={bootstrap_logo} value = "bootstrap"></img>
            </div>
            <div className = "projects-elm" id = "pro-2" value = "pro-2"> </div>
            <div className = "projects-elm" id = "pro-3" value = "pro-3"> </div>
            <div className = "projects-elm" id = "pro-4" value = "pro-4"> </div>
            <div className = "projects-elm" id = "pro-5" value = "pro-5"> </div>
            <div className = "projects-elm" id = "pro-6" value = "pro-6"> </div>
        </div>
    );
    
};

export default Projects;