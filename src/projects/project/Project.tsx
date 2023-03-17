import React from "react";
import c from './Project.module.scss'
import {Button} from "../../common/components/button/Button";


type WorkPropsType = {
	title: string
	description: string
	img: string
	siteLink: string
	codeLink: string
}

export const Project = ({title, description, img, siteLink, codeLink}: WorkPropsType) => {
	const backgroundImage = {
		backgroundImage: `url(${img})`
	}
	return (
		<div>
			<div className={c.project}>
				<div className={c.projectImage} style={backgroundImage}>
					{siteLink !== '' && <Button title={'Site'} onClick={() => {
						window.open(siteLink)
					}}>
						projects
					</Button>}
					{codeLink !== '' && <Button title={'Code'} onClick={() => {
						window.open(codeLink)
					}}>
						projects
					</Button>}
				</div>
				<div className={c.textBlock}>
					<h3>{title}</h3>
					<div className={c.description}>
						{description}
					</div>
				</div>
			</div>
		</div>
	)
}