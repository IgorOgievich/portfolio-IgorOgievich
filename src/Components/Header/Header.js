import React from 'react';
import a from './Header.module.css';
import NavHeader from "./NavHeader/NavHeader";

function Header() {
    return (
        <div className={a.header}>
            <div className={a.container}>
               <NavHeader/>
            </div>
        </div>
    );
}

export default Header;
