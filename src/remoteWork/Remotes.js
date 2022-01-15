import React from "react";
import s from './Remotes.module.css';
import styledContainer from '../common/styles/Container.module.css'



function Remote() {
    return (
        <div className={s.remoteBlock}>
            <div className={`${styledContainer.container} ${s.remoteContainer}`}>

                <div className={s.btn_wrapper}>
                    <h2 className={s.img}>I am considering options for remote work</h2>
                    <button className={s.btn}> <h2> Hire me</h2></button>
                </div>
            </div>

        </div>
    );
}

export default Remote;
