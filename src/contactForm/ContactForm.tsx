import React from "react";
import styleContainer from '../common/styles/Container.module.scss'
import s from './ContactForm.module.scss'
import {Button} from "../button/Button";
import {Title} from "../common/components/title/Title";


export const ContactForm = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={'contacts'}/>
                <div className={s.formBlock}>
                    <form className={s.form} action="">
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='Email'/>
                        <textarea placeholder='Your massage...'/>
                        <Button type={'submit'} title={'Send'}/>
                    </form>
                </div>
            </div>
        </div>
    )
}