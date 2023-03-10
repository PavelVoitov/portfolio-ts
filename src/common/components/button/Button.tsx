import React, {ReactNode} from "react";
import s from './Button.module.scss'
import {LinkProps} from "react-router-dom";

type ButtonPropsType = {
    title: string
    children?: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    component?:  React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>
    to?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button type={props.type} className={props.children === 'projects' ? s.projects : s.default} onClick={props.onClick}>
            {props.title}
        </button>
    )
}