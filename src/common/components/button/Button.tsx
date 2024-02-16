import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    type?: "projects" | "default"
    onClick?: () => void
    disable?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.type === 'projects' ? s.projects : s.default} onClick={props.onClick} disabled={props.disable}>
            {props.title}
        </button>
    )
}