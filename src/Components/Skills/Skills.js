import React from 'react';
import a from '../Skills/Skills.module.css';
import ComponentSkills from "./ComponentSkills/ComponentSkills";

function Skills() {
  return (
    <div className={a.skills}>
        <ComponentSkills/>
    </div> 
  );
}

export default Skills;
