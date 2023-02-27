import React from "react";
import c from './Project.module.scss'
import {Button} from "../../common/components/button/Button";


type WorkPropsType = {
    title: string
    description: string
    img: string
    siteLink: string
    codeLink: string
}

export const Project = ({title, description, img, siteLink, codeLink}: WorkPropsType) => {
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }
    return (
        <>
            <div className={c.project}>
                <div className={c.projectImage} style={backgroundImage}>
                    <Button title={'Site'} onClick={() => {window.location.href = `${siteLink}`}}>
                        projects
                    </Button>
                    <Button title={'Code'} onClick={() => {window.location.href = `${codeLink}`}}>
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