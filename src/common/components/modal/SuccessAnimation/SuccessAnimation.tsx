import s from './SuccessAnimation.module.scss'

export const SuccessAnimation = () => {
  return (
		<div className={s.success_checkmark}>
			<div className={s.check_icon}>
				<span className={`${s.icon_line} ${s.line_tip}`}></span>
				<span className={`${s.icon_line} ${s.line_long}`}></span>
				<div className={s.icon_circle}></div>
				<div className={s.icon_fix}></div>
			</div>
		</div>
	)
}