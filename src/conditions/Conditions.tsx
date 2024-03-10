import React from "react";
import {Button} from "../common/components/button/Button";
import c from '../common/styles/Container.module.scss'
import s from './conditionsContainer.module.scss'
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";

export const Conditions = () => {
	const {t} = useTranslation()
	return (
		<div className={s.conditions}>
			<div className={`${c.container} ${s.conditionsContainer}`}>
					<span className={s.text}>
						{t('conditions')}
					</span>
					<Link to="contactForm"
								activeClass={s.active}
								spy={true}
								smooth={true}
								offset={-50}
								duration={1000}
								className={s.link}>
						<Button title={t('hire')} type={"default"}/>
					</Link>
			</div>
		</div>

	)
}