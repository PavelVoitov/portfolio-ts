import React from 'react'
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
	return (
		<div className={s.nav}>
			<a href="">Home</a>
			<a href="portfolio/src/header/nav/Nav">Skills</a>
			<Link to="projects"
						spy={true}
						smooth={true}
						offset={-100}
						duration={2000}
						style={{cursor: "pointer"}}>
				Project
			</Link>
			{/*<a href="#projects">Project</a>*/}
			<a href="portfolio/src/header/nav/Nav">Contact</a>
		</div>
	)
}