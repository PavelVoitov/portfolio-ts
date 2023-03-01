import React, {useCallback} from 'react'
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/images/photo.jpg'
import {loadFull} from "tsparticles";
import {Particles} from 'react-tsparticles';
import {Zoom} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';


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
					<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={5000}>
						<h3 className={s.firstName}>Pavel</h3>
					</Tilt>
					<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={5000}>
						<h3 className={s.lastName}>Voitov</h3>
					</Tilt>
					<Zoom>
						<Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} transitionSpeed={5000}>
							<span className={s.spanFontSize}>Frontend Developer</span>
						</Tilt>
					</Zoom>
				</div>
					<div className={s.mainPhoto}>
						<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} transitionSpeed={5000}>
						<img src={photo} alt="my photo" style={{borderRadius: 10, borderStyle: "inset"}}/>
						</Tilt>
					</div>

			</div>
		</div>
	)
}