import React from "react";
import s from './Project.module.scss';


function Project(props) {
    return <div className={s.project}>

        <div className={s.imageBlock} style={props.style}>
            <a className={s.vewBtn}>{props.title}</a>
        </div>

        <div className={s.projectInfo}>
            <h3 className={s.projectName}>
                My <span className={s.colorTheme}>{props.projectName}</span>
            </h3>
            <span className={s.description}>{props.description}</span>
        </div>


    </div>;
}

export default Project;
