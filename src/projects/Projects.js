import React from "react";
import s from './Projects.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import social from "../../src/assets/image/social.jpg";
import todo from "../../src/assets/image/todo.jpeg";



function Projects() {

    const socialStyle = {
        backgroundImage: `url(${social})`
    };
    const todoStyle = {
        backgroundImage: `url(${todo})`
    };
// <span className={s.hiddenText}>{props.hiddenText}</span>
    return (
        <div className={s.projectsBlock}>
            <div className={`${styledContainer.container} ${s.projectsContainer}`}>
               <Title text={'My projects'}/>

                <div className={s.projects}>
                    <Project style={socialStyle} title={'WATCH'} projectName={'Social network'} description={'description for Project'}/>
                    <Project style={todoStyle} title={'WATCH'} projectName={'Todolist'} description={'description for Project'}/>
                </div>
            </div>

        </div>
    );
}
//1254
export default Projects;
