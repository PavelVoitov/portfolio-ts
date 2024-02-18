import React from 'react';
import s from './Modal.module.scss'
import {SuccessAnimation} from "./SuccessAnimation/SuccessAnimation";
import failedIcon from "../../../assets/images/failed.png"

type Props = {
  error?: boolean
  handleClose: () => void
}

export const Modal = ({handleClose, error}: Props) => {
  return (
    <section className={s.modal}>
      <div className={s.flex}>
        <div className={s.btnClose} onClick={handleClose}>⨉</div>
      </div>
      <div className={s.textModalBlock}>
        <div>
          <h3 className={error ? s.error : ''}>Your message {error && "didn't"} sent!</h3>
        </div>
        <div className={s.modalMessage}>
          {error
            ? "Please send me a message on any other social network or messenger"
            : "Thank you! I will get back in touch with you soon!"}
          <div>
            <b className={s.modalMessage}>Have a great day!</b>
          </div>
        </div>
        {error
          ? <div className={s.errorIconBlock}>
            	<img src={failedIcon} alt="failed" className={s.errorIcon}/>
          	</div>
          : <SuccessAnimation/>}
      </div>
    </section>
  )
}