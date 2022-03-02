import React from "react";
import s from './Main.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/icons/scillsIcon/myPhoto.jpg'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styledContainer.container}>
                <div className={s.text}>
                    <h1 className={s.myName}>
                        <div>Hi, I am</div>
                        <span className={s.color}>Sergey Gridin</span>
                    </h1>
                    <p>I am a frontend web developer.
                        I can provide clean code.
                    </p>

                </div>
                <div className={s.photo}>
                    <img className={s.myPhoto} src={myPhoto} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
