import React from "react";
import s from './Project.module.scss';
import Button from "../../common/components/button/Button";


function Project(props) {
    return <div className={s.project}>

        <div className={s.imageBlock} style={props.style}>
                <Button  title={'WATCH'}/>
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
