import React from "react";
import s from './Footer.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import github from '../assets/icons/github.svg'
import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import telegram from '../assets/icons/telegram.svg'
import Fade from 'react-reveal/Fade';



function Footer() {

    return (
        <div className={s.skillsBlock}>

            <div className={`${styledContainer.container} ${s.container}`}>
                <h2 className={s.title}>Sergey Gridin</h2>
                <Fade right>
                <div className={s.social}>
                    <a className={s.icon} href='https://github.com/SRGREEN90'>
                        <img src={github} alt=""/>
                    </a>
                    <a className={s.icon} href='https://github.com/SRGREEN90'>
                        <img src={instagram} alt=""/>
                    </a>
                    <a  className={s.icon} href='https://wa.me/79188778844'>
                        <img src={whatsapp} alt=""/>
                    </a>
                    <a  className={s.icon} href='https://t.me/SAGridin'>
                        <img src={telegram} alt=""/>
                    </a>
                </div>
                </Fade >
            </div>
            <div className={`${styledContainer.container} ${s.container}`}>
                <h2 className={s.title}>© 2022 All rights reserved</h2>
            </div>

        </div>
    );
}

export default Footer;
