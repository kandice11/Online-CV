import React from 'react';

 function Card(props) {
     return (
         <div className="name">
             <h1>{props.name}</h1>
             <h4>{props.jobTitle}</h4>
         </div>
     )
 }



export default Card;