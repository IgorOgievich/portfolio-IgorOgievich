import React from 'react';
import a from '../ContainerContacts/ContainerContacts.module.css';
import FormContacts from "./FormContacts/FormContacts";
import Fade from 'react-reveal/Fade';
import {AxiosInstance as axios} from "axios";


function ContainerContacts() {
    return (
        <Fade>
        <div id = {'contacts'} className={a.component}>
            <div className={a.nameContacts}>
                <span> Контакты </span>
                <div className={a.blockLine}> </div>
            </div>
                <div className={a.form}>
                   <FormContacts/>
                </div>
        </div>
        </Fade>
    );
}

export default ContainerContacts;
