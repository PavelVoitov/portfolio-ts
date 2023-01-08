import React from "react";
import s from './Works.module.css'
import {Work} from "./work/Work"
import styleContainer from '../common/styles/Container.module.css'
import todolist from '../common/images/todolist.png'
import socialNetwork from '../common/images/socialnetworks.png'
import counter from '../common/images/counter.png'

const works = [
    {
        title: 'To-do list',
        description: 'Web-application for every day on a week',
        img: todolist
    },
    {
        title: 'Social network',
        description: 'Social network in 8-bit style',
        img: socialNetwork
    },
    {
        title: 'Counter',
        description: 'Educational application aimed at developing logic and improving skills',
        img: counter
    },

]


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    {works.map(el => {
                        return <Work title={el.title} description={el.description} img={el.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}