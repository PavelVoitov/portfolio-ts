import React from "react";
import s from "./projects.module.scss"
import {Project} from "./project/Project"
import styleContainer from "../common/styles/Container.module.scss"
import todolist from "../assets/images/todolist.png"
import socialNetwork from "../assets/images/socialnetworks.png"
import counter from "../assets/images/counter.png"
import {Title} from "../common/components/title/Title";

const works = [
    {
        title: "To-do list",
        description: "Web-application for every day on a week",
        img: todolist,
        siteLink: 'https://pavelvoitov.github.io/todolist-ts-01/',
        codeLink: 'https://github.com/PavelVoitov/todolist-ts-01.git'
    },
    {
        title: "Social network",
        description: "Social network in 8-bit style",
        img: socialNetwork,
        siteLink: 'https://pavelvoitov.github.io/8-bit/',
        codeLink: 'https://github.com/PavelVoitov/8-bit.git'
    },
    {
        title: "Counter",
        description: "Educational application aimed at developing logic and improving skills",
        img: counter,
        siteLink: 'https://pavelvoitov.github.io/counter/',
        codeLink: 'https://github.com/PavelVoitov/counter.git'
    },

]

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={"projects"}/>
                <div className={s.projects}>
                    {works.map(el => {
                        return <Project key={el.title}
                                        title={el.title}
                                        description={el.description}
                                        img={el.img}
                                        siteLink={el.siteLink}
                                        codeLink={el.codeLink}/>
                    })}
                </div>
            </div>
        </div>
    )
}