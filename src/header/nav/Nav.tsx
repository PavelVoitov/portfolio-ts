import React, {MouseEvent} from 'react'
import s from './Nav.module.scss'
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
import {Select} from "../../common/components/select/Select";

type LanguageType = {
	id: string
  title: string
}
export type LanguagesType = LanguageType[]

const lngs: LanguagesType = [
	{id: "en", title: 'En'},
	{id: "ru", title: 'Ru'},
]

type Props = {
	changeLanguage: (lng: string) => void
}
export const Nav = ({changeLanguage}: Props) => {
	const {t} = useTranslation()

	const handleSelectLanguage = (lng: string) => {
		changeLanguage(lng)
	}

	return (
		<div className={s.nav}>
			<Link to="main"
						activeClass={s.active}
						spy={true}
						smooth={true}
						offset={-100}
						duration={2000}
						className={s.link}>
				{t('home')}
			</Link>
			<Link to="skills"
						activeClass={s.active}
						spy={true}
						smooth={true}
						offset={-100}
						duration={2000}
						className={s.link}>
				{t('skills')}
			</Link>
			<Link to="projects"
						activeClass={s.active}
						spy={true}
						smooth={true}
						offset={-100}
						duration={2000}
						className={s.link}>
				{t('projects')}
			</Link>
			<Link to="contactForm"
						activeClass={s.active}
						spy={true}
						smooth={true}
						offset={-50}
						duration={2000}
						className={s.link}>
				{t('contacts')}
			</Link>
			<Select onChangeOption={handleSelectLanguage} options={lngs}/>
		</div>
	)
}