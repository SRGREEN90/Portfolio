import React from "react";
import s from './Contact.module.css';


function Contact(props) {
    return (
        <div className={s.main}>
            <div>
                <form className={s.form} >
                    <div>
                        <div>
                            <label htmlFor="name">Enter your name</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Enter your email</label>
                            <input type="text" id="email" />
                        </div>
                        <div>
                            <label htmlFor="message">Enter your message</label>
                            <textarea rows="6" id="message" />
                        </div>
                    </div>

                </form>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn} type='submit' >
                    <h2>SEND</h2>
                </button>
            </div>
        </div>
    );
}
export default Contact;
