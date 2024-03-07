import React from "react";
import c from './Project.module.scss'
import {Button} from "../../common/components/button/Button";
import githubIcon from "../../assets/images/github-mark.png"

type Props = {
  title: string
  description: string
  img: string
  siteLink: string
  codeLink: string
  sliderPhotos: string[]
  handleOpenModal: (sliderPhotos: string[]) => void
}
export const Project = ({
                          title,
                          description,
                          img,
                          siteLink,
                          codeLink,
                          sliderPhotos,
                          handleOpenModal
                        }: Props) => {

  const backgroundImage = {
    backgroundImage: `url(${img})`
  }

  const openSliderModal = () => {
    handleOpenModal(sliderPhotos)
  }

  return (
    <div className={c.project}>
      <div className={c.projectImage} style={backgroundImage}>
        {siteLink !== '' && <Button title={'Link'} onClick={() => {
          window.open(siteLink)
        }} type={"projects"} image={true}/>}
        {sliderPhotos.length !== 0
					&& <Button title={'View'}
										 onClick={openSliderModal}
										 type={"projects"}
					/>}
      </div>
      <div className={c.textBlock}>
				<div className={c.titleAndIconBlock}>
					<h3>
						{title}
					</h3>
					{codeLink && <a href={codeLink}
                          target={"_blank"}
                          rel="noreferrer"
                          title="Github">
						<img src={githubIcon} alt="github icon" className={c.githubIcon}/>
					</a>}
				</div>
				<div className={c.description}>
          {description}
        </div>
      </div>
    </div>
  )
}