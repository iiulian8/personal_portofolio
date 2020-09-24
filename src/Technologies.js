import React from 'react';
import { useState } from 'react';
import { html_logo, css_logo, javascript_logo, jquery_logo, bootstrap_logo, react_logo } from './images/import_photos';


function Technologies() {

    const [clicked, setClicked] = useState('');

    return (
        <div id="technologies-container">

            <div id="technologies-title">
                <h1>Technologies I use</h1>
            </div>

            <div id="technologies-grid">
                <div className="technologies-cell">
                    <img src={html_logo} id="html_logo" alt="HTML Logo" onClick={() => setClicked("HTML")}></img>
                </div>

                <div className="technologies-cell">
                    <img src={css_logo} id="css_logo" alt="CSS Logo" onClick={() => setClicked("CSS")}></img>
                </div>

                <div className="technologies-cell">
                    <img src={javascript_logo} id="javascript_logo" alt="Javascript Logo" onClick={() => setClicked("Javascript")}></img>
                </div>

                <div className="technologies-cell">
                    <img src={jquery_logo} class="jquery_logo" alt="JQuery Logo" onClick={() => setClicked("JQuery")}></img>
                </div>

                <div className="technologies-cell">
                    <img src={react_logo} id="react_logo" alt="React Logo" onClick={() => setClicked("React")}></img>
                </div>

                <div className="technologies-cell">
                    <img src={bootstrap_logo} id="bootstrap_logo" alt="Bootstrap Logo" onClick={() => setClicked("Bootstrap")}></img>
                </div>
            </div>
            <div id="display-container">
                <p1>{clicked}</p1>
            </div>
        </div>

    )
}

export default Technologies;