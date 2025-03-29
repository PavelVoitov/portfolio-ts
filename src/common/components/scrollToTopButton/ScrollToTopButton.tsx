import s from './ScrollToTopButton.module.scss'
import { FaAngleUp } from "react-icons/fa";
import {useEffect, useState} from "react";

export const ScrollToTop = () => {
	const [showTopButton, setShowTopButton] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setShowTopButton(window.scrollY > 600);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
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