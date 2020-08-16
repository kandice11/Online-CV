import React from 'react';

function proSkills(props) {
    return (
        <div>
            
                <h3>Professional Skills</h3>
                <ul className="no-bullets">
                    <li>{props.React}</li>
                    <li>{props.HTML5}</li>
                    <li>{props.CSS3}</li>
                    <li>{props.Javascript}</li>
                    <li>{props.VisualStudio}</li>
                    <li>{props.Git}</li>
                    <li>{props.Bootstrap}</li>
                    <li>{props.JQuery}</li>
                    <li>{props.SEO}</li>
                    <li>{props.Nodejs}</li>
                    <li>{props.UI}</li>
                    <li>{props.Typography}</li>
                </ul>
            
            </div>

        
    )
}

export default proSkills;