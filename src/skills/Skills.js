import React from "react";
import s from './Skills.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import ts from '../assets/icons/scillsIcon/ts.svg'
import react from '../assets/icons/scillsIcon/react.svg'
import js from '../assets/icons/scillsIcon/js.svg'
import sass from '../assets/icons/scillsIcon/sass.svg'
import html from '../assets/icons/scillsIcon/html.svg'
import css from '../assets/icons/scillsIcon/css.svg'
import redux from '../assets/icons/scillsIcon/redux.svg'
import storybook from '../assets/icons/scillsIcon/storybook.svg'
import mui from '../assets/icons/scillsIcon/mui.svg'



import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div id="skills" className={s.skillsBlock}>
            <div className={`${styledContainer.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'}/>
                <Fade right>
                    <div className={s.skills}>
                        <Skill title={'TypeScript'} icon={ts} description={'description for TypeScript'}/>
                        <Skill title={'React'} icon={react} description={'description for React'}/>
                        <Skill title={'JavaScript'} icon={js} description={'description for JavaScript'}/>
                    </div>
                    <div className={s.skills}>
                        <Skill title={'HTML'} icon={html} description={'description for HTML'}/>
                        <Skill title={'Css'} icon={css} description={'description for Css'}/>
                        <Skill title={'Sass'} icon={sass} description={'description for Sass'}/>
                    </div>
                    <div className={s.skills}>
                        <Skill title={'Redux'} icon={redux} description={'description for Redux'}/>
                        <Skill title={'Storybook'} icon={storybook} description={'description for Storybook'}/>
                        <Skill title={'Material UI'} icon={mui} description={'description for Material UI'}/>
                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default Skills;
