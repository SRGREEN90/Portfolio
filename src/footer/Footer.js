import React from "react";
import s from './Footer.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import FooterItem from "./item/FooterItem";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import google from '../assets/icons/google.svg'
import github from '../assets/icons/github.svg'

import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'




function Footer() {

    return (
        <div className={s.skillsBlock}>

            <div className={`${styledContainer.container} ${s.container}`}>
                <h2 className={s.title}>Sergey Gridin</h2>
                <div className={s.social}>
                    <FooterItem svg={github}/>
                    <FooterItem svg={google}/>
                    <FooterItem svg={instagram}/>
                    <FooterItem svg={whatsapp}/>
                </div>
            </div>
            <div className={`${styledContainer.container} ${s.container}`}>
                <h2 className={s.title}>© 2022 All rights reserved</h2>
            </div>

        </div>
    );
}

export default Footer;
