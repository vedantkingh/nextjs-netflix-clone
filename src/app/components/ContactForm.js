'use client'
import React, { useState } from 'react';
import styles from '@/app/contact/contact.module.css'
import common from '@/app/styles/common.module.css'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
})


const ContactForm = () => {
    const[user, setUser] = useState({
        username : "",
        email : "",
        phone : "",
        message : ""
    }) 

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({...prevUser, [name] : value}))
    }

    function handleSubmit(e){

    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Name:
                    <input type='text' name='username' id='username' placeholder='Enter your phone' className={mulish.className}
                    value={user.username} onChange={handleChange} required/>
                </label>
                <label htmlFor="email" className={styles.label}>
                    E-mail:
                    <input type='text' name='email' id='email' placeholder='Enter your E-mail' className={mulish.className}
                    value={user.email} onChange={handleChange} required/>
                </label>
                <label htmlFor="phone" className={styles.label}>
                    Phone:
                    <input type='number' name='phone' id='phone' placeholder='Enter your Phone' className={mulish.className}
                    value={user.phone} onChange={handleChange} required/>
                </label>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea rows={5} type='text' name='message' id='message' placeholder='Enter your Message' 
                    className={mulish.className} value={user.message} onChange={handleChange} required/>
                </label>
            </div>
            <div>
                <button type='submit' className={common.fancyButton}>Send Message</button>    
            </div>      
        </form>
    );
};

export default ContactForm;