import React from 'react'
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="portfolio/src/header/nav/Nav">Home</a>
            <a href="portfolio/src/header/nav/Nav">Skills</a>
            <a href="portfolio/src/header/nav/Nav">Project</a>
            <a href="portfolio/src/header/nav/Nav">Contact</a>
        </div>
    )
}