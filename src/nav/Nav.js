import React from "react";
import s from './Nav.module.scss';

function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.ref} href=''>Main</a>
            <a className={s.ref} href=''>Skills</a>
            <a className={s.ref} href=''>Projects</a>
            <a className={s.ref} href=''>Contacts</a>
        </div>
    );
}

export default Nav;
