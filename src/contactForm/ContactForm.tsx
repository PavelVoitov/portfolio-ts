import React, {FormEvent} from "react";
import styleContainer from '../common/styles/Container.module.scss'
import s from './ContactForm.module.scss'
import {Button} from "../common/components/button/Button";
import {Title} from "../common/components/title/Title";
import axios from "axios";


export const ContactForm = () => {

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = e.currentTarget as typeof e.currentTarget & {
			name: { value: string };
			email: { value: string };
			message: { value: string };
		};
		const formData = {
			name: data.name.value,
			email: data.email.value,
			message: data.message.value
		}
		console.log(formData)
		axios.post('https://portfolio-gmail-smtp-topaz.vercel.app/sendMessage', formData)
			.then(() => {
				alert('Ready!')
			})
	}

	return (
		<div id={'contactForm'} className={s.contactsBlock}>
			<div className={`${styleContainer.container} ${s.contactsContainer}`}>
				<Title title={'contacts'}/>
				<div className={s.formBlock}>
					<form className={s.form} onSubmit={handleSubmit}>
						<input type='text' placeholder='Name' name={'name'}/>
						<input type='text' placeholder='Email' name={'email'}/>
						<textarea placeholder='Your massage...' name={'message'}/>
						<Button type={'submit'} title={'Send'}/>
					</form>
				</div>
			</div>
		</div>
	)
}