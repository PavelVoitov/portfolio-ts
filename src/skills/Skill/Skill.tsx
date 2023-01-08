import React from "react";
import c from './Skill.module.scss'

type SkillPropsType = {
    title: string
    img: string
    description: string
}

export const Skill = ({title, img, description}: SkillPropsType) => {
    return (
        <div className={c.skill}>
            <div>
                <img src={img} alt="skill-icon"/>
            </div>
            <h3>{title}</h3>
            <div className={c.description}>
                {description}
            </div>
        </div>
    )
}