import React, {useState} from 'react'
import s from './BurgerNav.module.scss'
import {Link} from "react-scroll";

export const BurgerNav = () => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

	const onClickBurgerMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	return (
		<div className={s.burgerNav}>
			<div className={isOpenMenu ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
				<Link to="main"
							activeClass={s.active}
							spy={true}
							smooth={true}
							offset={-100}
							duration={2000}
							className={s.link}>
					Home
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
			<div onClick={onClickBurgerMenu}
					 className={!isOpenMenu ? s.burgerBtn : `${s.burgerBtn} ${s.change}`}
			>
				<div className={s.bar1}/>
				<div className={s.bar2}/>
				<div className={s.bar3}/>
			</div>
		</div>
	)
}