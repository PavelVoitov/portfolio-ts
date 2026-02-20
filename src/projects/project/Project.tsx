import React from "react";
import c from './Project.module.scss'
import { Button } from "../../common/components/button/Button";
import githubIcon from "../../assets/images/github-mark.png"
import { useTranslation } from "react-i18next";
import { FaCode } from "react-icons/fa";

type Props = {
    title: string
    description: string
    img: string
    siteLink?: string
    codeLink?: string
    sliderPhotos: string[]
    handleOpenModal: (sliderPhotos: string[]) => void
    stack?: string[]
}
export const Project = ({
    title,
    description,
    img,
    siteLink,
    codeLink,
    sliderPhotos,
    handleOpenModal,
    stack
}: Props) => {
    const { t } = useTranslation()
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }

    const openSliderModal = () => {
        handleOpenModal(sliderPhotos)
    }

    return (
        <div className={c.project}>
            <div className={c.projectImage} style={backgroundImage}>
                {!!siteLink && (
                    <Button
                        title={t('link')}
                        onClick={() => window.open(siteLink)}
                        type={"projects"}
                        image={true}
                    />
                )}
                {sliderPhotos.length !== 0 && (
                    <Button
                        title={'View'}
                        onClick={openSliderModal}
                        type={"projects"}
                    />
                )}
            </div>
            <div className={c.textBlock}>
                <div className={c.titleAndIconBlock}>
                    <h3>{title}</h3>
                    <div className={c.iconsContainer}>
                        {stack && stack.length > 0 && (
                            <div className={c.tooltipContainer}>
                                <FaCode className={c.stackIcon} />
                                <div className={c.tooltip}>
                                    <div className={c.tooltipTitle}>Tech Stack:</div>
                                    <div className={c.tooltipContent}>
                                        {stack.map((tech, index) => (
                                            <span key={index} className={c.techItem}>
                                                {tech}
                                                {index < stack.length - 1 && <span className={c.separator}> • </span>}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        {codeLink && (
                            <a
                                href={codeLink}
                                target={"_blank"}
                                rel="noreferrer"
                                title="Github"
                            >
                                <img src={githubIcon} alt="github icon" className={c.githubIcon}/>
                            </a>
                        )}
                    </div>
                </div>
                <div className={c.description}>
                    {description}
                </div>
            </div>
        </div>
    )
}