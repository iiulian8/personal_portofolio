import React from 'react';
import {useState} from 'react';


function Contact() {
    const [first_name, setFirst] = useState('');
    const [last_name, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, sendMessage] = useState('');



    return(
        <div>
            <p1>Contact Form</p1>
            <form id = "contact-form">
                <input type = "text" onChange = {() => setFirst(event.target.value)}></input>
            </form>
        </div>
    );
}

export default Contact;