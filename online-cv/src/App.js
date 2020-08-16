
import React from 'react';
import './App.css';
import Card from './components/Card';
import cardInfo from './cardInfo';
import Contacts from './components/contacts';
import ProSkills from './components/proSkills';
import proSkillsData from './proSkillsData';
import PerSkills from './components/perSkills';
import perSkillsData from './perSkillsData';
import Interests from './components/interests';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import SelfStudy from './components/selfStudy';
import WorkExperience from './components/workExperience';
import Education from './components/education';

function App() {
  return (
     <div>
    <div className="topPanel">
      <Card
        name={cardInfo[0].name}
        jobTitle={cardInfo[0].jobTitle}
      />
      <div className="contactMeConatiner">
        <Contacts />
      </div>
    </div>
      <div class="leftPanel col-lg-6">
      <div className="skills1">
       <ProSkills
        React={proSkillsData[0].React}
        HTML5={proSkillsData[0].HTML5}
        CSS3={proSkillsData[0].CSS3}
        Javascript={proSkillsData[0].Javascript}
        VisualStudio={proSkillsData[0].VisualStudio}
        Git={proSkillsData[0].Git}
        Bootstrap={proSkillsData[0].Bootstrap}
        JQuery={proSkillsData[0].JQuery}
        SEO={proSkillsData[0].SEO}
        Nodejs={proSkillsData[0].Nodejs}
        UI={proSkillsData[0].UI}
        Typography={proSkillsData[0].Typography}
          />
        </div>

         <div className="skills2">
            <PerSkills 
              GrowthMindset={perSkillsData[0].GrowthMindset}
              CreativeSpirit={perSkillsData[0].CreativeSpirit}
              Professional={perSkillsData[0].Professional}
              Reliable={perSkillsData[0].Reliable}
              Organised={perSkillsData[0].Organised}
              Fastlearner={perSkillsData[0].Fastlearner}
              Motivated={perSkillsData[0].Motivated}
            />
            </div>

        <div className="Interests">
          <Interests 
          />
          </div> 
      </div>
      <div className="rightPanel col-lg-6">
  <AboutMe />

<div>
        <Projects />
</div>
<div>
          <SelfStudy />
</div>
<div>
          <WorkExperience />
</div>
<div>
  <Education />
</div>
      </div>

    
  </div>
  );
}

export default App;