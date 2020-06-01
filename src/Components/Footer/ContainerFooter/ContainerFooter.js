import React from 'react';
import a from '../ContainerFooter/ContainerFooter.module.css';
import FormFooter from "./FormFooter/FormFooter";
import Fade from 'react-reveal/Fade';


function ContainerFooter() {
    return (
        <Fade>
            <div className={a.component}>
                <div className={a.nameFooter}>
                    <span>Игорь Огиевич</span>
                    <div className={a.blockLine}>
                    </div>
                </div>
                <div className={a.form}>
                    <FormFooter/>
                </div>
                <div className={a.footer}>
                    2020 все права защищены
                </div>
            </div>
        </Fade>
    );
}

export default ContainerFooter;
