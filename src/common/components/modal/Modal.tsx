import React from 'react';
import s from './Modal.module.scss'
import {SuccessAnimation} from "./SuccessAnimation/SuccessAnimation";

type Props = {
	handleClose: () => void
}

export const Modal = ({handleClose}: Props) => {
	return (
			<section className={s.modal}>
				<div className={s.flex}>
					<div className={s.btnClose} onClick={() => handleClose()}>⨉</div>
				</div>
				<div className={s.textModalBlock}>
					<div><h3>Your message sent!</h3></div>
					<div className={s.modalMessage}>
						Thank you! I will get back in touch with you soon!
						<div>
							<b>Have a great day!</b>
						</div>
					</div>
					<SuccessAnimation />
				</div>
			</section>
	)
}