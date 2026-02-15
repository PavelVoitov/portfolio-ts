import React, {useRef, useState} from "react";
import styleContainer from '../common/styles/Container.module.scss'
import s from './ContactForm.module.scss'
import {Button} from "../common/components/button/Button";
import {Title} from "../common/components/title/Title";
import {Modal} from "../common/components/modal/Modal";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";

type FormikErrorType = {
	name?: string
	email?: string
	message?: string
}

export const ContactForm = () => {
	const {t} = useTranslation()
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [disableButton, setDisableButton] = useState(false)
	const [error, setError] = useState<boolean>(false)

	const form = useRef<any>()
	const modalClosed = () => {
		setIsOpenModal(false)
		setDisableButton(false)
		document.body.style.overflow = 'unset';
	}

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
			const serviceId: string = process.env.REACT_APP_SERVICE_ID ?? "";
			const templateId: string = process.env.REACT_APP_TEMPLATE_ID ?? "";
			setDisableButton(true)
			document.body.style.overflow = 'hidden';
			emailjs
				.sendForm(serviceId, templateId, form.current, {
					publicKey: process.env.REACT_APP_PUBLIC_KEY,
				})
				.then(
					() => {
						setIsOpenModal(true)
						formik.resetForm()
					},
					(error) => {
						setError(true)
						setIsOpenModal(true)
						console.log(error)
					},
				);
			setTimeout(() => {
				modalClosed()
				setError(false)
			}, 8000)
		},
	})

		const handleClose = () => {
		modalClosed()
	}


	return (
		<div id={'contactForm'} className={s.contactsBlock}>
			<div className={`${styleContainer.container} ${s.contactsContainer}`}>
				{isOpenModal ? <Modal handleClose={handleClose} error={error}/> : ''}
				<Title title={t('contacts')}/>
				<div className={s.formBlock}>
					<form className={s.form} ref={form} onSubmit={formik.handleSubmit}>
						<>
							{formik.errors.name && formik.touched.name
								? <div className={s.errorField}>{formik.errors.name}</div>
								: <div className={s.emptyErrorField}></div>}
							<input
								type='text'
								placeholder={t('name')}
								{...formik.getFieldProps("name")}
								className={formik.errors.name && formik.touched.name ? s.error : ''}
							/>
						</>
						<>
							{formik.errors.email && formik.touched.email
								? <div className={s.errorField}>{formik.errors.email}</div>
								: <div className={s.emptyErrorField}></div>}
							<input
								type='text'
								placeholder='Email'
								{...formik.getFieldProps("email")}
								className={formik.errors.email && formik.touched.email ? s.error : ''}
							/>
						</>
						<>
							{formik.errors.message && formik.touched.message
								? <div className={s.errorField}>{formik.errors.message}</div>
								: <div className={s.emptyErrorField}></div>}
							<textarea
								placeholder={`${t("yourMassage")}...`}
								{...formik.getFieldProps("message")}
								className={formik.errors.message && formik.touched.message ? s.error : ''}
							/>
						</>
						<Button title={t('send')} disable={disableButton} type={"default"} htmlType="submit"/>
					</form>
				</div>
			</div>
		</div>
	)
}
