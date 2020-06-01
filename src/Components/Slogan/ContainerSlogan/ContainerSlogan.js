import React from 'react';
import a from '../ContainerSlogan/ContainerSlogan.module.css';
import Fade from "react-reveal/Fade";

function ContainerSlogan() {
    return (
        <Fade>
        <div className={a.component}>
            <div className={a.nameSlogan}>
                <span>Рассматриваю варианты удаленной работы</span>
                <div className={a.blockLine}> </div>
            </div>
            <div className={a.oneButton}>
                <button>Нанять меня</button>
            </div>
        </div>
        </Fade>
    );
}

export default ContainerSlogan;
