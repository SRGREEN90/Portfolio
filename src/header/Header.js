import React from "react";
import s from './Header.module.css';
import Nav from "./nav/Nav";
import BurgerNav from "./burger-nav/BurgerNav";


function Header() {
    return (
        <div className={`${s.header}`}>
                <Nav/>
                <BurgerNav/>
        </div>
    );
}

export default Header;
