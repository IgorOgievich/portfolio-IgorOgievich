import React from 'react';
import a from '../Footer/Footer.module.css';
import ContainerFooter from "./ContainerFooter/ContainerFooter";

function Footer() {
    return (
        <div className={a.footer}>
            <ContainerFooter/>
        </div>
    );
}

export default Footer;
