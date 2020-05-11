import React from 'react';
import a from '../ComponentSkills/ComponentSkills.module.css';
import MySkills from "./MySkills/MySkills";
import ImgJs from "../../../Img/javascript.png"
import ImgReact from "../../../Img/PikPng.com_google-play-store-logo_2690057.png"
import ImgRedux from "../../../Img/language.png"
import ImgHTML from "../../../Img/code.png"
import ImgCss from "../../../Img/css.png"
import ImgGit from "../../../Img/git.png"

function ComponentSkills(props) {
    return (
        <div className={a.component}>
            <div className={a.nameSkills}>
                <span>Мои Скиллы</span>
                <div className={a.blockLine}></div>
            </div>
            <div className={a.mySkills}>
                <MySkills imgSkills={ImgJs}
                          nameSkills= {"JS"}
                          description="Реакт авлоыарыолв глыпра руы щгуыпрагщуыр"/>
                <MySkills imgSkills={ImgReact}
                          nameSkills= {"React"}
                          description="segdfgsadg sdg gad авлоыарыолв глыпра руы щгуыпрагщуыр"/>
                <MySkills imgSkills={ImgRedux}
                          nameSkills= {"Redux"}
                          description="лдыовад ыушардршррсы гыпагслвыр смвырмолвыпрмрвыл  авлоыарыолв глыпра руы щгуыпрагщуыр"/>
                <MySkills imgSkills={ImgHTML}
                          nameSkills= {"HTML"}
                          description="лдыовад ыушардршррсы гыпагслвыр смвырмолвыпрмрвыл  авлоыарыолв глыпра руы щгуыпрагщуыр"/>
                <MySkills imgSkills={ImgCss}
                          nameSkills= {"Css"}
                          description="лдыовад ыушардршррсы гыпагслвыр смвырмолвыпрмрвыл  авлоыарыолв глыпра руы щгуыпрагщуыр"/>
                <MySkills imgSkills={ImgGit}
                          nameSkills= {"Git"}
                          description="segdfgsadg sdg gad авлоыарыолв глыпра руы щгуыпрагщуыр"/>
            </div>
        </div>
    );
}

export default ComponentSkills;
