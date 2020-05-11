import React from 'react';
import a from '../ContainerPhotoAndGreeting/ContainerPhotoAndGreeting.module.css';

function ContainerPhotoAndGreeting() {
    return (
            <div className={a.container}>
                <div className={a.greeting}>
                    <span>Привет!</span>
                    <span>Я <span>Игорь Огиевич</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={a.photo}>
                    <img src="https://sun9-6.userapi.com/c836227/v836227915/38ceb/RsIQA5w9mYA.jpg" alt="Igor Ogievich"/>
                </div>
            </div>
    );
}

export default ContainerPhotoAndGreeting;


// https://sun9-6.userapi.com/c836227/v836227915/38ceb/RsIQA5w9mYA.jpg