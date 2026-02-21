import React, { useCallback } from 'react'
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/images/photo.png'
import { loadFull } from "tsparticles";
import { Particles } from 'react-tsparticles';
import { Zoom } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import cv from '../assets/Pavel_Voitov_CV.pdf'
import { Button } from "../common/components/button/Button";
import { useTranslation } from "react-i18next";

export const Main = () => {
    const { t } = useTranslation()
    const init = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    return (
        <div id={'main'} className={s.mainBlock}>
            <Particles options={{
                background: {
                    color: {
                        value: "transparent"
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: [
                            "#00d3bc", // Primary cyan
                            "#ffffff", // Bright stars
                            "#9d4edd", // Purple nebula
                            "#4cc9f0", // Blue stars
                            "#7209b7", // Deep purple
                            "#b5179e", // Magenta
                        ],
                    },
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    opacity: {
                        value: { min: 0.1, max: 1 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            sync: false,
                            minimumValue: 0.1,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.5,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: {
                            value: "#00d3bc",
                        },
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: { min: 0.1, max: 0.3 },
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                        attract: {
                            enable: false,
                        },
                    },
                    twinkle: {
                        particles: {
                            enable: true,
                            frequency: 0.05,
                            opacity: 1,
                        },
                    },
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                detectRetina: true,
            }} init={init}/>
            <div className={styleContainer.container}>
                <div className={s.mainText}>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={5000}>
                        <h3 className={s.firstName}>{t("pavel")}</h3>
                    </Tilt>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={5000}>
                        <h3 className={s.lastName}>{t('voitov')}</h3>
                    </Tilt>
                    <Zoom>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} transitionSpeed={5000}>
                            <span className={s.spanFontSize}>{t("frontendDeveloper")}</span>
                        </Tilt>
                        {/*<a href={cv} download="Pavel_Voitov.pdf">*/}
                        {/*	<Button title={t('downloadCV')} type={"projects"}/>*/}
                        {/*</a>*/}
                    </Zoom>
                </div>
                <div className={s.mainPhoto}>
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} transitionSpeed={5000}>
                        <img src={photo} alt="the site owner" />
                    </Tilt>
                </div>
            </div>
        </div>
    )
}