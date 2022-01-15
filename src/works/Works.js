import React from "react";
import s from './Works.module.css';
import styledContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";



function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styledContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work title={'watch '} projectName={'projectName'} description={'description for Project'}/>
                    <Work title={'watch '} projectName={'projectName'} description={'description for Project'}/>
                </div>
            </div>

        </div>
    );
}

export default Works;
