import React from "react";
import s from './Contact.module.scss';


function Contact() {
    return (
        <div className={s.main}>
            <h4 className={s.title}>Get In Touch</h4>
                <form className={s.form} >
                        <div className={s.formField}>
                            <label htmlFor="contact-form-name">Enter your name*</label>
                            <input className={s.formFieldInput} type="text" name="name" id="contact-form-name" value=""/>
                        </div>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-email">Enter your email*</label>
                            <input className={s.formFieldInput} type="text" name="email" id="contact-form-email" value=""/>
                        </div>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-subject">Enter your subject*</label>
                            <input className={s.formFieldInput} type="text" id="subject" />
                        </div>
                        <div className={s.formField}>
                            <label htmlFor="contact-form-message">Enter your Message*</label>
                            <textarea className={s.formFieldTextarea}  name="message" id="contact-form-message" cols="30" rows="6"/>
                        </div>


                </form>

            <div className={s.btnWrapper}>
                <button className={s.btn} type='submit' >
                    <h2>SEND</h2>
                </button>
            </div>
        </div>
    );
}
export default Contact;
