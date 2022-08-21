import React from "react";
import s from './Contact.module.scss';
import Button from "../../common/components/button/Button";
import { useRef} from 'react';
import axios from 'axios';

function Contact() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);


    const onSubmitSendMessage = (e) => {
        e.preventDefault()
        if (nameRef && nameRef.current && nameRef.current.value &&
            emailRef && emailRef.current && emailRef.current.value &&
            subjectRef && subjectRef.current && subjectRef.current.value
            && messageRef && messageRef.current && messageRef.current.value) {
            axios.post('https://smtp-server-for-mail.herokuapp.com/sendMessage', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                subjectRef: subjectRef.current.value,
                message: messageRef.current.value,
            })
            nameRef.current.value = ''
            emailRef.current.value = ''
            subjectRef.current.value = ''
            messageRef.current.value = ''

            alert('Your message has been sent to my email. I will contact you as soon as possible. Have a nice day!')
        } else {
            alert('Please, complete all data fields.')
        }
    }


    return (
        <div className={s.main}>
            <h4 className={s.title}>Get In Touch</h4>
                <form className={s.form} onSubmit={onSubmitSendMessage}>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-name">Enter your name*</label>
                            <input className={s.formFieldInput} type="text" ref={nameRef} name="name" id="contact-form-name" />
                        </div>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-email">Enter your email*</label>
                            <input className={s.formFieldInput} type="text" ref={emailRef} name="email" id="contact-form-email" />
                        </div>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-subject">Enter your subject*</label>
                            <input className={s.formFieldInput} ref={subjectRef} type="text" id="subject" />
                        </div>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-message">Enter your Message*</label>
                            <textarea className={s.formFieldTextarea} ref={messageRef} name="message" id="contact-form-message" cols="30" rows="6"/>
                        </div>
                </form>

            <div className={s.btnWrapper}>
                <Button type={"submit"} title={'SEND'}/>
            </div>
        </div>
    );
}
export default Contact;
