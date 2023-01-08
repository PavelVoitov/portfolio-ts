import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import s from './ContactForm.module.css'
import {Button} from "../button/Button";


export const ContactForm = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.formBlock}>
                    <form className={s.form} action="">
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='Email'/>
                        <textarea placeholder='Your massage...'/>
                        <Button title={'Send'}/>
                    </form>
                </div>

            </div>
        </div>
    )
}