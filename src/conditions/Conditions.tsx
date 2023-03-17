import React from "react";
import {Button} from "../common/components/button/Button";
import c from '../common/styles/Container.module.scss'
import s from './conditionsContainer.module.scss'
import {Link} from "react-scroll";


export const Conditions = () => {

	return (
		<div className={s.conditions}>
			<div className={`${c.container} ${s.conditionsContainer}`}>
					<span className={s.text}>
						I am considering options for remote work and relocation anywhere in the world
					</span>
					<Link to="contactForm"
								activeClass={s.active}
								spy={true}
								smooth={true}
								offset={-50}
								duration={1000}
								className={s.link}>
						<Button title={'Hire'}>
							default
						</Button>
					</Link>
			</div>
		</div>

	)
}