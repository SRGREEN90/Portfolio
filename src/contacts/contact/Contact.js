import React from "react";
import s from './Contact.module.css';


function Contact(props) {
    return (
        <div className={s.main}>
            <div>
                <form className={s.form} >
                    <ul>
                        <li>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="Enter your first name here"/>
                        </li>
                        <li>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Enter your last name here"/>
                        </li>
                        <li>
                            <label htmlFor="message">Message</label>
                            <textarea rows="6" id="message" placeholder="Enter your message here"/>
                        </li>
                    </ul>

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
