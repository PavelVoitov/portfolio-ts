import React from "react";
import s from './Button.module.scss'
import imageLink from "../../../assets/images/external-link.png"


type ButtonPropsType = {
    title: string
    type?: "projects" | "default"
    htmlType?: "button" | "submit" | "reset"
    onClick?: () => void
    disable?: boolean
    image?: boolean
}

export const Button = ({title, onClick, disable, type, image, htmlType = "button"}: ButtonPropsType) => {
    return (
      <button type={htmlType} className={type === 'projects' ? s.projects : s.default}
              onClick={onClick} disabled={disable}>
          {title}
          {image && <img src={imageLink} alt="external link icon" className={s.imageLink}/>}
      </button>
    )
}
