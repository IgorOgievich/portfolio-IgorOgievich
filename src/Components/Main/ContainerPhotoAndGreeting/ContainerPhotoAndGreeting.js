import React from 'react';
import a from '../ContainerPhotoAndGreeting/ContainerPhotoAndGreeting.module.css';
import MyPhoto from '../../../Img/MyPhoto.jpg'

function ContainerPhotoAndGreeting() {
    return (
        <div id={"main"} className={a.container}>
            <div className={a.greeting}>
                <span>Привет!</span>
                <span>Я <span>Игорь Огиевич</span></span>
                <h1>Я front-end разработчик</h1>
            </div>
            <div className={a.photo}>
                <img src={MyPhoto} alt="Igor Ogievich"/>
            </div>
        </div>
    );
}

export default ContainerPhotoAndGreeting;
