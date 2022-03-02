import React from "react";
import s from './Main.module.scss';
import styledContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styledContainer.container}>
                <div className={s.text}>
                    <h1 className={s.myName}>
                        Hi, I am
                        <span className={s.color}>Sergey Gridin</span>
                    </h1>
                    <p>I am a frontend web developer.
                        I can provide clean code.
                    </p>

                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
