import herostyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const HeroSection = ({title, imageUrl}) => {
    return (
        <main className={herostyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={herostyles.hero_content}>
                        <h1>{title}</h1>
                        <p>
                            Enjoy a collection of movies.
                        </p>
                        <button className={herostyles.fancyButton}>
                            Explore Movies
                        </button>
                    </div>
                    <div href className={herostyles.hero_image}>
                            <Image src={imageUrl} alt='Watching Netflix' width={500} height={500}/>
                        </div>
                </div>
            </div>  
        </main>
    );
};

export default HeroSection;