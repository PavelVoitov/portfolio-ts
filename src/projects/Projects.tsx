import React, {useState} from "react";
import s from './Projects.module.scss'
import {Project} from "./project/Project"
import styleContainer from "../common/styles/Container.module.scss"
import {Title} from "../common/components/title/Title"
import {projects} from "./dataProjects"
import AliceCarousel from "react-alice-carousel";
import "../../src/common/styles/carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import {ModalCarousel} from "../modalCarousel/ModalCarousel";
import {useTranslation} from "react-i18next";

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 3 },
};

export const Projects = () => {
	const {t} = useTranslation()
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
	const [screenshots, setScreenshots] = useState<[] | string[]>([])
	const handleOpenModal = (screenshots: string[]) => {
		setScreenshots(screenshots)
		setIsOpenModal(true)
	}

	const handleCloseModal = () => {
		setIsOpenModal(false)
		setScreenshots([])
	}
	return (
		<div id={'projects'} className={s.projectsBlock}>
			<div className={`${styleContainer.container} ${s.projectsContainer}`}>
				{isOpenModal && <ModalCarousel handleCloseModal = {handleCloseModal} screenshots={screenshots}/>}
				<Title title={t('projects')}/>
				<div className={s.projects}>
					<AliceCarousel
						controlsStrategy={"alternate"}
						responsive={responsive}
						mouseTracking={true}
						disableDotsControls={true}
						infinite={true}
					>
						{projects.map(el => {
							return <Project key={el.title}
															title={el.title}
															description={el.description}
															img={el.img}
															siteLink={el.siteLink}
															codeLink={el.githubLink}
															sliderPhotos={el.sliderPhoto}
															handleOpenModal={handleOpenModal}
							/>
						})}
						</AliceCarousel>
				</div>
			</div>
		</div>
	)
}