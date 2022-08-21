import React from "react";
import s from './Projects.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import social from "../../src/assets/image/social.jpg";
import todo from "../../src/assets/image/todo.jpeg";
import Fade from 'react-reveal/Fade';


function Projects() {

    const socialStyle = {
        backgroundImage: `url(${social})`
    };
    const todoStyle = {
        backgroundImage: `url(${todo})`
    };

    return (
        <div id="projects" className={s.projectsBlock}>
            <div  className={`${styledContainer.container} ${s.projectsContainer}`}>
               <Title text={'My projects'}/>
                <Fade right>
                <div className={s.projects}>
                    <Project style={socialStyle} projectName={'Social network'} description={'description for Project'}/>
                    <Project style={todoStyle} projectName={'Todolist'} description={'description for Project'}/>
                </div>
                </Fade >
            </div>

        </div>
    );
}
//1254
export default Projects;
