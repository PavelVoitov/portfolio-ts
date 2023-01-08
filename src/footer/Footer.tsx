import React from 'react'
import s from './Footer.module.css'
import telegram from '../common/images/telegram.png'
import facebook from '../common/images/facebook.png'
import instagram from '../common/images/instagram.png'
import linkedin from '../common/images/linkedin.png'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.name}>Pavel Voitov</div>
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