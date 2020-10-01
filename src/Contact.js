import React from 'react';
import { facebook_icon, github_icon } from './images/import_photos';


function Contact() {

    return (
        <div id="contact-container">
            <h1>Get in touch</h1>
            <a href="#">opreai@roehampton.ac.uk</a>
            
            <div className="icon-cont">
                <a href=" https://www.facebook.com/iiulian8/" target = "_blank">
                    <img src={facebook_icon}></img>
                </a>
               
            </div>

            <div className="icon-cont">
                <a href="https://github.com/iiulian8" target = "_blank">
                    <img src={github_icon}></img>
                </a>
            </div>


        </div>
    );
}

export default Contact;