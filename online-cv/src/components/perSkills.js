import React from 'react';

function perSkills(props) {
    return (
    <div>
            <h3>Personal Skills</h3>
            <ul className="no-bullets">
                <li>{props.GrowthMindset}</li>
                <li>{props.CreativeSpirit}</li>
                <li>{props.Professional}</li>
                <li>{props.Reliable}</li>
                <li>{props.Organised}</li>
                <li>{props.Fastlearner}</li>
                <li>{props.Motivated}</li>
            </ul>
        </div>

    )
}

export default perSkills;