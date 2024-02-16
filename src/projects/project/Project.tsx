import React from "react";
import c from './Project.module.scss'
import {Button} from "../../common/components/button/Button";

type WorkPropsType = {
	title: string
	description: string
	img: string
	siteLink: string
	codeLink: string
	sliderPhotos: string[]
	handleOpenModal: (sliderPhotos: string[]) => void
}
export const Project = ({title, description, img, siteLink, codeLink, sliderPhotos, handleOpenModal}: WorkPropsType) => {

	const backgroundImage = {
		backgroundImage: `url(${img})`
	}

	const openSliderModal = () => {
		handleOpenModal(sliderPhotos)
	}

	return (
		<div className={c.project}>
			<div className={c.projectImage} style={backgroundImage}>
				{siteLink !== '' && <Button title={'Site'} onClick={() => {
					window.open(siteLink)
				}} type={"projects"}/>}
				{codeLink !== '' && <Button title={'Source Code'} onClick={() => {
					window.open(codeLink)
				}} type={"projects"}/>}
				{sliderPhotos.length !== 0 && <Button title={'Screenshots'} onClick={openSliderModal} type={"projects"}/>}
			</div>
			<div className={c.textBlock}>
				<h3>{title}</h3>
				<div className={c.description}>
					{description}
				</div>
			</div>
		</div>
	)
}