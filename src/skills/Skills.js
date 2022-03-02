import React from "react";
import s from './Skills.module.css';
import styledContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import ts from '../assets/icons/scillsIcon/ts.svg'
import react from '../assets/icons/scillsIcon/react.svg'
import js from '../assets/icons/scillsIcon/js.svg'

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styledContainer.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title={'TypeScript'} icon={ts} description={'description for TypeScript'}/>
                    <Skill title={'React'} icon={react} description={'description for React'}/>
                    <Skill title={'JavaScript'} icon={js} description={'description for JavaScript'}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
