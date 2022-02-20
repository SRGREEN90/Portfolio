import React from "react";
import s from './Skills.module.css';
import styledContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styledContainer.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'}/>
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
