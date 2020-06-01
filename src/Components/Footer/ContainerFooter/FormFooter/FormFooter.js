import React from 'react';
import a from '../FormFooter/FormFooter.module.css';
import ImgInstagram from "../../../../Img/instagram (1).png";
import ImgTelegram from "../../../../Img/telegram.png";
import ImgLinkidin from "../../../../Img/linkedin.png";
import ImgVK from "../../../../Img/vk.png";

function FormFooter() {
    return (
        <div className={a.form}>
            <div className={a.blockForm}>
                <a href="https://www.instagram.com/ileonidovich/" target="_blank">
                    <img src={ImgInstagram}/>
                </a>
            </div>
            <div className={a.blockForm}>
                <a href="https://vk.com/id131833915" target="_blank">
                    <img src={ImgTelegram}/>
                </a>
            </div>
            <div className={a.blockForm}>
                <a href="http://linkedin.com/in/игорь-огиевич-859444189" target="_blank">
                    <img src={ImgLinkidin}/>
                </a>
            </div>
            <div className={a.blockForm}>
                <a href="https://vk.com/id131833915" target="_blank">
                    <img src={ImgVK}/>
                </a>
            </div>
        </div>
    );
}

export default FormFooter;
