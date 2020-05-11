import React from 'react';
import a from '../Slogan/Slogan.module.css';
import ContainerSlogan from "./ContainerSlogan/ContainerSlogan";

function Slogan() {
  return (
    <div className={a.slogan}>
        <ContainerSlogan/>
    </div> 
  );
}

export default Slogan;
