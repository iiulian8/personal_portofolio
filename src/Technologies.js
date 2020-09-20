import React from 'react';
import { bootstrap_logo, css_logo, html_logo, javascript_logo, jquery_logo, php_logo, react_logo } from './images/import_photos';

function Technologies() {
    return(
        <div id = "projects-grid">
            <div className = "projects-cell">
            <img src = {bootstrap_logo}></img>
            </div>

            <div className = "projects-cell">
            <img src = {bootstrap_logo}></img>
            </div>

            <div className = "projects-cell">
            <img src = {bootstrap_logo}></img>
            </div>

            <div className = "projects-cell">
            <img src = {bootstrap_logo}></img>
            </div>

            <div className = "projects-cell">
            <img src = {bootstrap_logo}></img>
            </div>

            <div className = "projects-cell">
            <img src = {bootstrap_logo}></img>
            </div>
        </div>
    )
}

export default Technologies;