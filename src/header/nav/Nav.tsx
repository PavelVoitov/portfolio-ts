import React from 'react'
import s from './Nav.module.scss'
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";

export const Nav = () => {
	const {t} = useTranslation()

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
				Skills
			</Link>
			<Link to="projects"
						activeClass={s.active}
						spy={true}
						smooth={true}
						offset={-100}
						duration={2000}
						className={s.link}>
				Projects
			</Link>
			<Link to="contactForm"
						activeClass={s.active}
						spy={true}
						smooth={true}
						offset={-50}
						duration={2000}
						className={s.link}>
				Contact
			</Link>
		</div>
	)
}