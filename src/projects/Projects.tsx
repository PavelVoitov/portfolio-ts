import React from "react";
import s from './Projects.module.scss'
import {Project} from "./project/Project"
import styleContainer from "../common/styles/Container.module.scss"
import {Title} from "../common/components/title/Title"
import {projects} from "./dataProjects"
import AliceCarousel from "react-alice-carousel";
import "../../src/common/styles/carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 3 },
};

export const Projects = () => {
	return (
		<div id={'projects'} className={s.projectsBlock}>
			<div className={`${styleContainer.container} ${s.projectsContainer}`}>
				<Title title={"projects"}/>
				<div className={s.projects}>
					<AliceCarousel
						controlsStrategy={"responsive"}
						responsive={responsive}
						mouseTracking={true}
					>
						{projects.map(el => {
							return <Project key={el.title}
															title={el.title}
															description={el.description}
															img={el.img}
															siteLink={el.siteLink}
															codeLink={el.codeLink}/>
						})}
						</AliceCarousel>
				</div>
			</div>
		</div>
	)
}