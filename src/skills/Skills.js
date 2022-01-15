import React from "react";
import s from './Skills.module.css';
import styledContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styledContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'TypeScript'} description={'description for TypeScript'}/>
                    <Skill title={'JavaScript'} description={'description for JavaScript'}/>
                    <Skill title={'React'} description={'description for React'}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
