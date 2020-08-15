import React from 'react';
import './App.css';
import Card from './components/Card';
import ContactInfo from './components/ContactInfo';
import cardInfo from './cardInfo';
import Contacts from './Contacts';

function App() {
  return (
    <div className="topPanel">
      <Card 
        name={cardInfo[0].name}
        jobTitle={cardInfo[0].jobTitle}
         /> 
      <div className="contactMeConatiner">
        <h2 class="contactMe">Contact Me</h2>
        <ContactInfo
          phone={Contacts[0].phone}
          email={Contacts[0].email}
          git={Contacts[0].git}
          />
      </div>
    </div>
  );
}

export default App;
