import React from "react";
import {Button} from "../button/Button";
import c from '../common/styles/Container.module.css'
import s from './conditionsContainer.module.css'

export const Conditions = () => {
    return (
        <div className={s.conditions}>
            <div className={`${c.container} ${s.conditionsContainer}`}>
                <span className={s.text}>I am considering options for remote work and relocation anywhere in the world</span>
                <Button title={'Employ'}>
                    default
                </Button>
            </div>
        </div>

    )
}