import React from 'react';
import a from '../Contacts/Contacts.module.css';
import ContainerContacts from "./ContainerContacts/ContainerContacts";

function Contacts() {
    return (
        <div className={a.contacts}>
            <ContainerContacts/>
        </div>
    );
}

export default Contacts;
