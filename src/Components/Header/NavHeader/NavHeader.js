import React from 'react';
import a from '../NavHeader/NavHeader.module.css';

function NavHeader() {
    return (
        <div className={a.nav}>
            <button><a href="" className={a.link}> Главная </a></button>
            <button> <a href="" className={a.link}> Ссылки </a></button>
                <button> <a href="" className={a.link}> Проекты </a></button>
                    <button><a href="" className={a.link}> Контакты </a></button>
        </div>
    );
}

export default NavHeader;
