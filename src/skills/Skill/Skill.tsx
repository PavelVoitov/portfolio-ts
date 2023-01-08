import React from "react";
import c from './Skill.module.css'

type SkillPropsType = {
    title: string
    img: string
    description: string
}

export const Skill = ({title, img, description}: SkillPropsType) => {
    return (
        <div className={c.skill}>
            <div className={c.icon}>
                <img src={img} alt=""/>
            </div>
            <h3>{title}</h3>
            <div className={c.description}>
                {description}
            </div>
        </div>
    )
}