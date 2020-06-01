import React from 'react';
import a from '../Projects/Progects.module.css';
import ContainerProjects from "./ContainerProgects/ContainerProgects";

function Projects() {
    return (
        <div className={a.projects}>
            <ContainerProjects/>
        </div>
    );
}

export default Projects;
