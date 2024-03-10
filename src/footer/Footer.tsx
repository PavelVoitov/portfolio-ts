import React from 'react'
import s from './Footer.module.scss'
import telegram from '../assets/images/telegram.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import {Title} from "../common/components/title/Title";
import {useTranslation} from "react-i18next";

export const Footer = () => {
	const currentYear = new Date().getFullYear()
	const {t} = useTranslation()
	return (
		<div className={s.footer}>
			<div className={s.container}>
				<Title title={`${t('pavel')} ${t("voitov")}`}/>
				<div className={s.iconsContainer}>
					<a href="https://t.me/voitov_pavel"><img src={telegram} alt="telegram"/></a>
					<a href="https://www.facebook.com/profile.php?id=100009416962471"><img src={facebook} alt="facebook"/></a>
					<a href="https://instagram.com/voitov_pavel?igshid=ZDdkNTZiNTM="><img src={instagram}
																																								alt="instagram"/></a>
					<a href="https://www.linkedin.com/in/pavel-voitov/"><img src={linkedin} alt="linkedin"/></a>
				</div>
				<div className={s.span}>
					{`© ${currentYear}`} {t('creator')}
				</div>
			</div>
		</div>
	)
}