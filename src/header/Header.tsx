import React from 'react'
import s from './Header.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import {Nav} from "./nav/Nav";

export const Header = () => {
    return (
        <div className={s.headerBlock}>
            <div className={`${styleContainer.container} ${s.header}`}>
                <div className={s.container}>
                    <Nav/>
                </div>
            </div>
        </div>

    )
}