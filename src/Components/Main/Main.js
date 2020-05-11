import React from 'react';
import a from '../Main/Main.module.css';
import ContainerPhotoAndGreeting from "./ContainerPhotoAndGreeting/ContainerPhotoAndGreeting";

function Main() {
    return (
        <div className={a.main}>
            <ContainerPhotoAndGreeting/>
        </div>
    );
}

export default Main;
