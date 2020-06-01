import React from 'react';
import a from '../MyProgect/MyProgect.module.css';

function MyProject(props) {
    return (

        <div className={a.OneSkill}>
            <div className={a.descriptionOneSkill}>
                <a className={a.refOneSkill} href={props.href} target="_blank">
                    Смотреть</a>
            </div>
            <div className={a.nameOneSkill}>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default MyProject;
