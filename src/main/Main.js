import React from "react";
import s from './Main.module.scss';
import styledContainer from '../common/styles/Container.module.css'
import myPhoto from '../assets/icons/scillsIcon/photoPortfolio.jpg'
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {

    return (
        <div id="main" className={s.mainBlock}>
            <Fade right>
            <div className={styledContainer.container}>
                <Particles
                    className={s.particles}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#a4acc4",
                            },
                            links: {
                                color: "#a4acc4",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className={s.text}>
                    <h1 className={s.myName}>
                        <div>Hi, I am</div>
                        <span className={s.color}>Sergey Gridin</span>
                    </h1>

                    <p className={s.devTitle}>
                        <ReactTypingEffect
                            text="I am a frontend web developer. I can provide clean code!"
                        />
                    </p>
                </div>
                <Tilt className="Tilt" options={{ max : 25 }}>
                    <div className={s.photo}>
                        <img className={s.myPhoto} src={myPhoto} alt=""/>
                    </div>
                </Tilt>

            </div>
            </Fade>
        </div>
    );
}

export default Main;
