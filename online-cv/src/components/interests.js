import React from 'react';

function interests(props) {
    return (
        <div>
            <h2>Interests</h2>
            <ul className="no-bullets">
                <li>{props.Reading}</li>
                <li>{props.OnlineGaming}</li>
                <li>{props.Gardening}</li>
                <li>{props.Piano}</li>
                <li>{props.Baking}</li>
            </ul>
        </div>

    )
}

export default interests;