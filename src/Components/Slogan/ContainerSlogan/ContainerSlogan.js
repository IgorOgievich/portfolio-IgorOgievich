import React from 'react';
import a from '../ContainerSlogan/ContainerSlogan.module.css';

function ContainerSlogan() {
    return (
        <div className={a.component}>
            <div className={a.nameSlogan}>
                <span>Рассматриваю варианты удаленной работы</span>
                <div className={a.blockLine}> </div>
            </div>
            <div className={a.oneButton}>
                <button>Нанять меня</button>
            </div>
        </div>
    );
}

export default ContainerSlogan;
