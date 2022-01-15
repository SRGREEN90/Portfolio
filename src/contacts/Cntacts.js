import React from "react";
import s from './Cntacts.module.css';
import styledContainer from '../common/styles/Container.module.css'
import Contact from "./contact/Contact";


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.contacts}>
                    <Contact


                    />
                </div>
            </div>

        </div>
    );
}

export default Contacts;
