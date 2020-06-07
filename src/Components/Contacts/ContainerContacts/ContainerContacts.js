import React from 'react';
import a from '../ContainerContacts/ContainerContacts.module.css';
import FormContacts from "./FormContacts/FormContacts";
import Fade from 'react-reveal/Fade';
import {AxiosInstance as axios} from "axios";

let Igor = () => {

    alert("Igorek");
   axios.post("http://localhost:3110/sendMessage")
       .then(()=> {
           alert("Твоё сообщение отправлено")
    })
};

function ContainerContacts() {
    return (
        <Fade>
        <div id = {'contacts'} className={a.component}>
            <div className={a.nameContacts}>
                <span> Контакты </span>
                <div className={a.blockLine}> </div>
            </div>
            <div className={a.form}>
                <div className={a.for}>
                   <FormContacts/>
                </div>
            </div>
            <div className={a.oneButton}>
                <button onClick={Igor}>Отправить</button>
            </div>
        </div>
        </Fade>
    );
}

export default ContainerContacts;
