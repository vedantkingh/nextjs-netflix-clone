import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm';

const page = () => {
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard/>
            <section className={styles.contact_section}>
                <h2>We&apos;d love to hear <span>from you</span></h2>
            </section>
            <ContactForm/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.187320448626!2d73.88916667496173!3d18.475172382609593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea62d51980df%3A0x2852517b24c2f948!2sHill%20Mist%20Garden%2C%20NIBM%20Road%2C%20Kausar%20Baugh%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048%2C%20India!5e0!3m2!1sen!2suk!4v1703012753706!5m2!1sen!2suk" 
            width={600} height={450} style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </div>
    );
};

export default page;