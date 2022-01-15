import React from "react";
import s from './FooterItem.module.css';

//import styledContainer from '../common/styles/Container.module.css'


function FooterItem(props) {
    return (
        <div className={s.item}>
            <div className={s.icon}>

            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                  {props.description}
            </span>
        </div>
    );
}

export default FooterItem;
