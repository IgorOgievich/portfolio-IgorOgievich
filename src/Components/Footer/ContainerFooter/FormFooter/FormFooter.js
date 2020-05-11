import React from 'react';
import a from '../FormFooter/FormFooter.module.css';
import ImgInstagram from "../../../../Img/instagram (1).png";
import ImgTelegram from "../../../../Img/telegram.png";
import ImgLinkidin from "../../../../Img/linkedin.png";
import ImgVK from "../../../../Img/vk.png";

function FormFooter() {
  return (
          <div className={a.form}>
           <div className={a.ad}>
               <a href="">
                   <img src={ImgInstagram} alt=""/>
               </a>
           </div>
            <div className={a.ad}>
                <a href="">
                    <img src={ImgTelegram} alt=""/>
                </a>
            </div>
            <div className={a.ad}>
                <a href="">
                    <img src={ImgLinkidin} alt=""/>
                </a>
            </div>
            <div className={a.ad}>
                <a href="">
                    <img src={ImgVK} alt=""/>
                </a>
            </div>
          </div>
  );
}

export default FormFooter;
