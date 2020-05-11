import React from 'react';
import a from '../MySkills/MySkills.module.css';

function MySkills(props) {
    return (
        <div>
            <div className={a.nameOneSkill}>
                <img src={props.imgSkills} alt=""/>
            </div>
            <div className={a.descriptionOneSkill}>
                <h3>{props.nameSkills}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default MySkills;
