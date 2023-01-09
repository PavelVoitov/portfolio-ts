import React from 'react'
import s from './Footer.module.scss'
import telegram from '../assets/images/telegram.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import {Title} from "../common/components/title/Title";


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                {/*<div className={s.name}>Pavel Voitov</div>*/}
                <Title title={'Pavel Voitov'}/>
                <div className={s.iconsContainer}>
                    <a href=""><img src={telegram} alt="telegram"/></a>
                    <a href=""><img src={facebook} alt="facebook"/></a>
                    <a href=""><img src={instagram} alt="instagram"/></a>
                    <a href=""><img src={linkedin} alt="linkedin"/></a>
                </div>
                <div className={s.span}>
                    <span>© 2022 All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}