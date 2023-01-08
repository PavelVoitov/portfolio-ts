import React, {ReactNode} from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    children?: ReactNode
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button type={props.type} className={props.children === 'projects' ? s.projects : s.default}>
            {props.title}
        </button>
    )
}