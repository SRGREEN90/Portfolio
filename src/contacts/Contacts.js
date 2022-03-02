import React from "react";
import s from './Contacts.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import Contact from "./contact/Contact";
import Title from "../common/components/title/Title";

import MyContacts from "./myContacts/MyContacts";


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
                <Title text={' My Contacts'}/>
                <div className={s.contacts}>
                        <Contact/>
                        <MyContacts/>
                </div>
            </div>

        </div>
    );
}

export default Contacts;
