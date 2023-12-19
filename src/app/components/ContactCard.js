import styles from '@/app/contact/contact.module.css'
import Link from 'next/link';
const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time: 72 hours</p>
                        <Link href="/"> Send Email <span>-&gt;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;