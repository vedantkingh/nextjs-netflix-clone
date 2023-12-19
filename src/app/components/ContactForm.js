import React from 'react';
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
})


const ContactForm = () => {
    return (
        <form className={styles.contact_form}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Name:
                    <input type='text' name='username' id='username' placeholder='Enter your phoneame' className={mulish.className}/>
                </label>
                <label htmlFor="email" className={styles.label}>
                    E-mail:
                    <input type='text' name='email' id='email' placeholder='Enter your E-mail' className={mulish.className}/>
                </label>
                <label htmlFor="phone" className={styles.label}>
                    Phone:
                    <input type='number' name='phone' id='phone' placeholder='Enter your Phone' className={mulish.className}/>
                </label>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea rows={5} type='text' name='message' id='message' placeholder='Enter your Message' className={mulish.className}/>
                </label>
            </div>      
        </form>
    );
};

export default ContactForm;