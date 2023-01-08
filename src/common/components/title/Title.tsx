import s from './Title.module.scss'

type TitlePropsType = {
    title: string
}

export const Title = ({title}: TitlePropsType) => {
    return (
                <div className={s.title}>
                    <span>{title}</span>
                </div>
    )
}