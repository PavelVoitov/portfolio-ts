import React, {useCallback} from 'react'
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/images/photo.jpg'
import {loadFull} from "tsparticles";
import { Particles } from 'react-tsparticles';
import {Zoom} from "react-awesome-reveal";


export const Main = () => {
  const init = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
      <div className={s.mainBlock}>
        <Particles options={{
          particles: {
            color: {
              value: '#fff'
            },
            number: {
              value: 100,
            },
            opacity: {
              value: {min: 0.3, max: 0.8}
            },
            shape: {
              type: 'edge'
            },
            size: {
              value: {min: 1, max: 2}
            },
            move: {
              direction: 'none',
              enable: true,
              speed: {min: 0.2, max: 0.5},
              straight: false
            },
            detectRetina: true,
          }
        }} init={init}/>
          <div className={styleContainer.container}>
              <div className={s.mainText}>
                  <h3 className={s.firstName}>Pavel</h3>
                  <h3 className={s.lastName}>Voitov</h3>
                <Zoom>
                  <span className={s.spanFontSize}>Frontend Developer</span>
                </Zoom>
              </div>
              <div className={s.mainPhoto}>
                <img src={photo} alt=""/>
              </div>
          </div>
      </div>
  )
}