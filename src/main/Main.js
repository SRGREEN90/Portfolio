import React from "react";
import s from './Main.module.css';
import styledContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styledContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1> I am a Superman</h1>
                    <p>Frontend developer</p>

                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
}

export default Main;
