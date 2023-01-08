import React from 'react'
import react from '../common/images/react_logo.png'
import js from '../common/images/JS.png'
import ts from '../common/images/typescript.png'
import html from '../common/images/html.png'
import css from '../common/images/css.png'
import git from '../common/images/Git.png'
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

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
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    {skills.map(el => {
                        return <Skill title={el.title} description={el.description} img={el.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}