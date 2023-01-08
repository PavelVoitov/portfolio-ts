import React from "react";
import c from './Work.module.css'
import {Button} from "../../button/Button";

type WorkPropsType = {
    title: string
    description: string
    img: string
}

export const Work = ({title, description, img}: WorkPropsType) => {
    return (
        <>
            <div className={c.work}>
                <div className={c.workImage} style={{backgroundImage: `url(${img})`}}>
                    <Button title={'Site'}>
                        works
                    </Button>
                    <Button title={'Code'}>
                        works
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