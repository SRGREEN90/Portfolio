import React from "react";
import s from './FooterItem.module.css';


function FooterItem(props) {
    return (
        <div className={s.item}>
            <div className={s.icon}>

                <img src={props.svg} alt=""/>

            </div>
            <h3>{props.title}</h3>

        </div>
    );
}

export default FooterItem;
