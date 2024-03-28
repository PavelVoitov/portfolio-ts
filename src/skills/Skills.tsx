import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import {skills} from './dataSkills'
import AliceCarousel from "react-alice-carousel";
import {useTranslation} from "react-i18next";

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 5},
};
export const Skills = () => {
	const {t} = useTranslation()

	return (
		<div id={'skills'} className={s.skillsBlock}>
			<div className={`${styleContainer.container} ${s.skillsContainer}`}>
				<Title title={t('skills')}/>
				<AliceCarousel
					autoPlay={true}
					animationDuration={1800}
					controlsStrategy={"alternate"}
					responsive={responsive}
					mouseTracking={true}
					disableDotsControls={true}
					infinite={true}
				>
					{/*<div className={s.skills}>*/}
						{skills.map(el => {
							return <Skill key={el.title} title={el.title} description={t(`${el.title}.description`)} img={el.img}/>
						})}
					{/*</div>*/}
				</AliceCarousel>

		</div>
</div>
	)
}