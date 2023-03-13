import React, {useState} from "react";
import styleContainer from '../common/styles/Container.module.scss'
import s from './ContactForm.module.scss'
import {Button} from "../common/components/button/Button";
import {Title} from "../common/components/title/Title";
import axios from "axios";
import {Modal} from "../common/components/modal/Modal";
import {useFormik} from "formik";

type FormikErrorType = {
	name?: string
	email?: string
	message?: string
}

export const ContactForm = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validate: (values) => {
			const errors: FormikErrorType = {}
			if (!values.name) {
				errors.name = 'Field "Name" is required!'
			} else if (values.name.length < 3 || values.name.length > 100) {
				errors.name = 'Your name must be between 3 and 100 characters'
			}
			if (!values.email) {
				errors.email = 'Field "Email" is required!'
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address'
			}
			if (!values.message) {
				errors.message = 'Field "Message" is required!'
			} else if (values.message.length < 5 || values.message.length > 300) {
				errors.message = 'Your message must be between 5 and 500 characters'
			}
			return errors
		},

		onSubmit: values => {
			axios.post('https://portfolio-gmail-smtp-topaz.vercel.app/sendMessage', values)
				.then(() => {
					setIsOpenModal(true)
				})
			formik.resetForm()
		},
	})

	const handleClose = () => {
		setIsOpenModal(false)
	}

	return (
		<div id={'contactForm'} className={s.contactsBlock}>
			<div className={`${styleContainer.container} ${s.contactsContainer}`}>
				{isOpenModal ? <Modal handleClose={handleClose}/> : ''}
				<Title title={'contacts'}/>
				<div className={s.formBlock}>
					<form className={s.form} onSubmit={formik.handleSubmit}>
						<input type='text' placeholder='Name' {...formik.getFieldProps("name")}/>
						{formik.errors.name ? <p style={{color: "red"}}>{formik.errors.name}</p> : ''}
						<input type='text' placeholder='Email' {...formik.getFieldProps("email")}/>
						{formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : ''}
						<textarea placeholder='Your massage...' {...formik.getFieldProps("message")}/>
						{formik.errors.message ? <div style={{color: "red"}}>{formik.errors.message}</div> : ''}
						<Button type={'submit'} title={'Send'}/>
					</form>
				</div>
			</div>
		</div>
	)
}