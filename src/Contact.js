import React from 'react';
import { facebook_icon } from './images/import_photos';


function Contact() {

    return (
        <div id="contact-container">
            <h1>Get in touch</h1>
            <a href="#">opreai@roehampton.ac.uk</a>
            <div className = "icon-cont">
            <img src = {facebook_icon}></img>
            </div>


        </div>
    );
}

export default Contact;