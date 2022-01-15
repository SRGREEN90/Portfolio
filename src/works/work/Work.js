import React from "react";
import s from './Work.module.css';


function Work(props) {
    return (<div className={s.work}>

        <div className={s.imageBlock}>
            <div className={s.icon}>
                {props.title}
            </div>
        </div>
        <span className={s.projectName}>
             {props.projectName}
            </span>
        <span className={s.description}>
             {props.description}
            </span>

    </div>);
}

export default Work;
