import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    type?: "projects" | "default"
    onClick?: () => void
    disable?: boolean
}

export const Button = ({title, onClick, disable, type}: ButtonPropsType) => {
    return (
        <button type={title === "Send" ? "submit" : "button"} className={type === 'projects' ? s.projects : s.default} onClick={onClick} disabled={disable}>
            {title}
        </button>
    )
}