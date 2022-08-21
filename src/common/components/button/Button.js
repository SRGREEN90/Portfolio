import React from "react";
import s from './Button.module.scss';


function Button(props) {
    return <div>
            <a onClick={props.redirectHandler} type={props.type} className={s.button} href=''>{props.title}</a>
    </div>
}
export default Button;
