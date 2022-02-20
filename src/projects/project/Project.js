import React from "react";
import s from './Project.module.css';


function Project(props) {
    return <div className={s.work}>

        <div className={s.imageBlock} style={props.style}>
            <a className={s.icon}>
                {props.title}
            </a>
        </div>
        <h3 className={s.projectName}>
            My <span className={s.colorTheme}>{props.projectName}</span>
        </h3>

        <span className={s.description}>
            {props.description}
            </span>

    </div>;
}

export default Project;
