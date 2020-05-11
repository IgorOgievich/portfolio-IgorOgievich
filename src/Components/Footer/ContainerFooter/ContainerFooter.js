import React from 'react';
import a from '../ContainerFooter/ContainerFooter.module.css';
import FormFooter from "./FormFooter/FormFooter";


function ContainerFooter() {
  return (
    <div className={a.component}>
      <div className={a.nameFooter}>
          <span>Игорь Огиевич</span>
          <div className={a.blockLine}> </div>
      </div>
        <div className={a.for}>
         <FormFooter/>
      </div>
      <div className={a.footer}>
        2019 все права защищены
      </div>
    </div>
  );
}

export default ContainerFooter;
