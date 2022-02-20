import React from "react";
import s from './Cntacts.module.css';
import styledContainer from '../common/styles/Container.module.css'
import Contact from "./contact/Contact";
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styledContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                {/*<h2 className={s.title}>Contacts</h2>*/}
                <div className={s.contacts}>
                    <Contact


                    />
                </div>
            </div>

        </div>
    );
}

export default Contacts;
