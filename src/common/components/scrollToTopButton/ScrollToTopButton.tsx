import s from './ScrollToTopButton.module.scss'
import { FaAngleUp } from "react-icons/fa";
import {useEffect, useState} from "react";
import {animateScroll} from "react-scroll";

export const ScrollToTop = () => {
	const [showTopButton, setShowTopButton] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 600) {
				setShowTopButton(true);
			} else {
				setShowTopButton(false);
			}
		});
	}, []);
	const goToTop = () => {
		animateScroll.scrollToTop()
	};
	return (
		<div className={s.top_to_btm}>
			{" "}
			{showTopButton && (
				<FaAngleUp
					className={`${s.icon_position} ${s.icon_style}`}
					onClick={goToTop}
				/>
			)}{" "}
		</div>
	);
};