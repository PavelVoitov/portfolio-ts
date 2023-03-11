import React from 'react'
import react from '../assets/images/react_logo.png'
import js from '../assets/images/JS.png'
import ts from '../assets/images/typescript.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import git from '../assets/images/Git.png'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";

const skills = [
    {
        title: 'JavaScript',
        description: 'Web design is a similar process of creation, with the intention intention of the pre presenting...',
        img: js
    },
    {
        title: 'TYPESCRIPT',
        description: 'Web design is a similar process of creation, with the intention intention of the pre presenting...',
        img: ts
    },
    {
        title: 'REACT',
        description: 'Web design is a similar process of creation, with the intention intention of the pre presenting...',
        img: react
    },
    {
        title: 'HTML',
        description: 'Web design is a similar process of creation, with the intention intention of the pre presenting...',
        img: html
    },
    {
        title: 'CSS',
        description: 'Web design is a similar process of creation, with the intention intention of the pre presenting...',
        img: css
    },
    {
        title: 'GIT',
        description: 'Web design is a similar process of creation, with the intention intention of the pre presenting...',
        img: git
    },
]


export const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'skills'}/>
                <div className={s.skills}>
                    {skills.map(el => {
                        return <Skill key={el.title} title={el.title} description={el.description} img={el.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}