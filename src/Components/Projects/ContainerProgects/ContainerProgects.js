import React from 'react';
import a from '../ContainerProgects/ContainerProgects.module.css';
import MyProject from "./MyProgect/MyProject";


function ContainerProjects() {
  return (

    <div className={a.component}>
      <div className={a.nameProject}>
        <span>Мои Проекты</span>
          <div className={a.blockLine}> </div>
      </div>
      <div className={a.myProject}>
        <MyProject />
        <MyProject />
        <MyProject />
        <MyProject />
      </div>
      
    </div> 
  );
}

export default ContainerProjects;
