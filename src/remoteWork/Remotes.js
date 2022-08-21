import React from "react";
import s from './Remotes.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import Button from "../common/components/button/Button";
import Fade from 'react-reveal/Fade';
import {Navigate} from "react-router-dom";
import {PATH} from "../common/Routes/Routes";


function Remote() {

    let redirectHandler = () => {
        return <Navigate to={PATH.CONTACTS}/>

    }

    return (
        <div className={s.remoteBlock}>
            <div className={`${styledContainer.container} ${s.remoteContainer}`}>
                <Fade right>
                <div className={s.btn_wrapper}>
                    <h2 className={s.img}>
                        I'm considering options for <span className={s.colorTheme}>remote work</span>
                    </h2>
                    <div className={s.btnBlock} >
                        <Button title={'HIRE ME'} redirectHandler={redirectHandler} />

                    </div>

                </div>
                </Fade>
            </div>

        </div>
    );
}

export default Remote;
