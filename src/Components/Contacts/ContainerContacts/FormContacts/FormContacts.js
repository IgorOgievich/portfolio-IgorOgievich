import React from 'react';
import a from '../FormContacts/FormContacts.module.css';

function FormContacts() {
    return (
                    <div className={a.inputs}>
                       <div> <input placeholder="Имя" type="text"/> </div>
                        <div className={a.inputTwo}> <input placeholder="Фамилия" type="text"/></div>
                        <div> <textarea placeholder="Введи сообщение" rows="15"></textarea></div>
                    </div>
    );
}

export default FormContacts;
