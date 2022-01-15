import React from "react";
import s from './Footer.module.css';
import styledContainer from '../common/styles/Container.module.css'
import FooterItem from "./item/FooterItem";


function Footer() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styledContainer.container} ${s.container}`}>
                <h2 className={s.title}>Sergey Gridin</h2>
                <div className={s.skills}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
            </div>
            <div className={`${styledContainer.container} ${s.container}`}>
                <h2 className={s.title}>© 2022 All rights reserved</h2>
            </div>

        </div>
    );
}
export default Footer;
