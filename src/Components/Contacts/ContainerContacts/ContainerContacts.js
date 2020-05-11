import React from 'react';
import a from '../ContainerContacts/ContainerContacts.module.css';
import FormContacts from "./FormContacts/FormContacts";

function ContainerContacts() {
    return (
        <div className={a.component}>
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
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default ContainerContacts;
