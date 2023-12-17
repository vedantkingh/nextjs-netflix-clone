import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = (curElem) => {
    const { id, type, title, synopsis} = curElem.jawSummary;
    if (!curElem.jawSummary.backgroundImage.url) {
        return null;
    }
    return (
        <>
            <div className={styles.card}>
                <div>
                    <Image className={styles.cardImage} src={curElem.jawSummary.backgroundImage.url} alt={title} width={curElem.jawSummary.backgroundImage.width} height={curElem.jawSummary.backgroundImage.height}/>
                </div>
                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>
                        {synopsis}
                    </p>
                    <Link href={'/movie/${id}'}>
                        <button className={styles.fancyButton}>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;