import React from "react";
import s from './Button.module.scss'
import imageLink from "../../../assets/images/external-link.png"


type ButtonPropsType = {
    title: string
    type?: "projects" | "default"
    onClick?: () => void
    disable?: boolean
    image?: boolean
}

export const Button = ({title, onClick, disable, type, image}: ButtonPropsType) => {
    return (
      <button type={title === "Send" ? "submit" : "button"} className={type === 'projects' ? s.projects : s.default}
              onClick={onClick} disabled={disable}>
          {title}
          {image && <img src={imageLink} alt="external link icon" className={s.imageLink}/>}
      </button>
    )
}