import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import double from '../../assets/icons/double.svg'

function BurgerNav() {
    const[menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} +  ${s.show}` : s.burgerNavItems}>

                <a href=''>Main</a>
                <a href=''>Skills</a>
                <Link activeClass={s.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}
                >Projects</Link>

                <a href=''>Contacts</a>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}> <img src={double} alt=""/></div>
        </div>
    );
}

export default BurgerNav;
