import React from 'react';
function ContactInfo(props) {
    return(
        
        <ul id="contactMe">
            <li>{props.phone}</li>
            <li>{props.email}</li>
            <li>{props.git}</li>
        </ul>
    )
}




export default ContactInfo;