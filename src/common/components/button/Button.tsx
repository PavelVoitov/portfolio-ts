import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    children?: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    disable?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button type={props.type} className={props.children === 'projects' ? s.projects : s.default} onClick={props.onClick} disabled={props.disable}>
            {props.title}
        </button>
    )
}