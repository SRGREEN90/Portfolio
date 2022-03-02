import React from "react";
import s from './Remotes.module.scss';
import styledContainer from '../common/styles/Container.module.css'



function Remote() {
    return (
        <div className={s.remoteBlock}>
            <div className={`${styledContainer.container} ${s.remoteContainer}`}>

                <div className={s.btn_wrapper}>
                    <h2 className={s.img}>
                        I'm considering options for <span className={s.colorTheme}>remote work</span>
                    </h2>
                    <button className={s.btn}>
                        <h2> HIRE ME</h2>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Remote;
