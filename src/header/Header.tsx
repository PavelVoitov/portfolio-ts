import React, {useEffect, useState} from 'react'
import s from './Header.module.scss'
import styleContainer from '../../src/common/styles/Container.module.scss';
import {Nav} from './nav/Nav';
import {BurgerNav} from "./burgerNav/BurgerNav";



export const Header = () => {
	const [position, setPosition] = useState(window.scrollY)
	const [visible, setVisible] = useState(true)
	useEffect(() => {
		const handleScroll = () => {
			let moving = window.scrollY
			setVisible(position > moving);
			setPosition(moving)
		};
		window.addEventListener("scroll", handleScroll);
		return (() => {
			window.removeEventListener("scroll", handleScroll);
		})
	})

	const cls = visible ? s.visible : s.hidden;

	return (
		<div className={`${s.headerBlock} ${cls}`}>
			<div className={`${styleContainer.container} ${s.header}`}>
				<div className={s.container}>
					<Nav/>
					<BurgerNav/>
				</div>
			</div>
		</div>

	)
}