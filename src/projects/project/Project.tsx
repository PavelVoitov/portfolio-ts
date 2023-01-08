import React from "react";
import c from './Project.module.scss'
import {Button} from "../../button/Button";

type WorkPropsType = {
    title: string
    description: string
    img: string
}

export const Project = ({title, description, img}: WorkPropsType) => {
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }
    return (
        <>
            <div className={c.project}>
                <div className={c.projectImage} style={backgroundImage}>
                    <Button title={'Site'}>
                        projects
                    </Button>
                    <Button title={'Code'}>
                        projects
                    </Button>
                </div>
                <div className={c.textBlock}>
                    <h3>{title}</h3>
                    <div className={c.description}>
                        {description}
                    </div>
                </div>
            </div>

        </>

    )
}