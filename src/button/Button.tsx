import React, {ReactNode} from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    children?: ReactNode
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.children === 'works' ? s.works : s.default}>
            {props.title}
        </button>
    )
}