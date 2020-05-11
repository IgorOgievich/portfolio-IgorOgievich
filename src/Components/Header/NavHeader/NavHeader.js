import React from 'react';
import a from '../NavHeader/NavHeader.module.css';
function NavHeader() {
    return (
                <div className={a.nav}>
                    <a href="" className={a.link}> Главная </a>
                    <a href="" className={a.link}> Ссылки </a>
                    <a href="" className={a.link}> Проекты </a>
                    <a href="" className={a.link}> Контакты </a>
                </div>
    );
}

export default NavHeader;
