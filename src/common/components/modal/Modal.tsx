import React from 'react';
import s from './Modal.module.scss'
import {SuccessAnimation} from "./SuccessAnimation/SuccessAnimation";
import failedIcon from "../../../assets/images/failed.png"
import { useTranslation } from "react-i18next";

type Props = {
  error?: boolean
  handleClose: () => void
}

export const Modal = ({handleClose, error}: Props) => {
  const { t } = useTranslation();

  return (
    <section className={s.modal}>
      <div className={s.flex}>
        <div className={s.btnClose} onClick={handleClose}>⨉</div>
      </div>
      <div className={s.textModalBlock}>
        <div>
          <h3 className={error ? s.error : ''}>
            {error ? t('modal.titleError') : t('modal.titleSuccess')}
          </h3>
        </div>
        <div className={s.modalMessage}>
          {error
            ? t('modal.contactAlternative')
            : t('modal.thankYou')}
          <div>
            <b className={s.modalMessage}>{t('modal.haveGreatDay')}</b>
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