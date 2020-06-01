import React from 'react';
import a from '../ComponentSkills/ComponentSkills.module.css';
import MySkills from "./MySkills/MySkills";
import ImgJs from "../../../Img/javascript.png"
import ImgReact from "../../../Img/PikPng.com_google-play-store-logo_2690057.png"
import ImgRedux from "../../../Img/language.png"
import ImgHTML from "../../../Img/code.png"
import ImgCss from "../../../Img/css.png"
import ImgGit from "../../../Img/git.png"
import Fade from 'react-reveal/Fade';

function ComponentSkills(props) {
    return (
        <Fade>
        <div id={"skills"} className={a.component}>
            <div className={a.nameSkills}>
                <span>Мои Скиллы</span>
                <div className={a.blockLine}></div>
            </div>
            <div className={a.mySkills}>
                <MySkills imgSkills={ImgJs}
                          nameSkills= {"JS"}
                          description="JavaScript язык программирования, который позволяет Вам создать динамически обновляемый контент,
                           управляет мультимедиа, анимирует изображения, впрочем, делает всё, что угодно."/>
                <MySkills imgSkills={ImgReact}
                          nameSkills= {"React"}
                          description="React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов."/>
                <MySkills imgSkills={ImgRedux}
                          nameSkills= {"Redux"}
                          description="Redux — это менеджер состояний. Чаще всего его используют с React, но его возможности не ограничиваются одной этой библиотекой."/>
                <MySkills imgSkills={ImgHTML}
                          nameSkills= {"HTML"}
                          description="HTML - это язык разметки, который мы используем для визуального и смыслового структурирования нашего web контента,
                           например, определяем параграфы, заголовки, таблицы данных, или вставляем изображения и видео на страницу."/>
                <MySkills imgSkills={ImgCss}
                          nameSkills= {"Css"}
                          description="CSS - это язык стилей с помощью которого мы придаем стиль отображения нашего HTML контента,
                           например придаем цвет фону (background) и шрифту, придаем контенту многоколоночный вид."/>
                <MySkills imgSkills={ImgGit}
                          nameSkills= {"Git"}
                          description="Git — распределённая система управления версиями."/>
            </div>
        </div>
            </Fade>
    );
}

export default ComponentSkills;
