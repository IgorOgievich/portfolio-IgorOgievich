import React from 'react';
import a from '../ContainerProgects/ContainerProgects.module.css';
import MyProject from "./MyProgect/MyProject";
import Fade from "react-reveal/Fade";



function ContainerProjects() {
  return (
      <Fade>
    <div id = {'projects'} className={a.component}>
      <div className={a.nameProject}>
        <span>Мои Проекты</span>
          <div className={a.blockLine}> </div>
      </div>
      <div className={a.myProject}>
        <MyProject href={'https://github.com/IgorOgievich/08-todolistsRedux'}
                   description={'Todo List с использованием Redux'}/>
        <MyProject href={'https://github.com/IgorOgievich/portfolio-IgorOgievich'}
                   description={'Портфолио'}/>
        <MyProject href={'https://github.com/IgorOgievich/message'}
                   description={'Message'}/>
        <MyProject href={'https://github.com/IgorOgievich/01_Todolist'}
                   description={'Todo List'}/>
      </div>
    </div>
      </Fade>
  );
}

export default ContainerProjects;
