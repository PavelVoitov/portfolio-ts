import React from 'react'
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/images/photo.jpg'

export const Main = () => {
  return (
      <div className={s.mainBlock}>
          <div className={styleContainer.container}>
              <div className={s.mainText}>
                  <h3 className={s.firstName}>Pavel</h3>
                  <h3 className={s.lastName}>Voitov</h3>
                  <span style={{fontSize: 20}}>Frontend Developer</span>
              </div>
              <div className={s.mainPhoto}>
                  <img src={photo} alt=""/>
              </div>
          </div>
      </div>
  )
}