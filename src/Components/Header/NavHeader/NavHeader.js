import React from 'react';
import a from '../NavHeader/NavHeader.module.css';

function NavHeader() {
    return (
        <div className={a.nav}>
            <button><a href="#main" className={a.link}> Главная </a></button>
            <button><a href="#skills" className={a.link}> Скиллы </a></button>
            <button><a href="#projects" className={a.link}> Проекты </a></button>
            <button><a href="#contacts" className={a.link}> Контакты </a></button>
        </div>
    );
}

export default NavHeader;