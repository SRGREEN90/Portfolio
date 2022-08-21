import React from "react";
import s from './Contacts.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import Contact from "./contact/Contact";
import Title from "../common/components/title/Title";

import MyContacts from "./myContacts/MyContacts";
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <div id="contacts" className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
                <Title text={' My Contacts'}/>
                <Fade right>
                <div className={s.contacts}>
                        <Contact/>
                        <MyContacts/>
                </div>
                </Fade>
            </div>

        </div>
    );
}
export default Contacts;
