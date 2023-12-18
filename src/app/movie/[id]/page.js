import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/common.module.css'


const page = async ({params}) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '09be91c3f2msh8c3e952167af8f3p1d4f36jsn360e80be6558',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  console.log(data);

    return (
        <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
              <h2 className={styles.movie_title}>  Netflix \ <span>  {main_data.type}  </span></h2>
                <div className={styles.card_section}>
                  <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={main_data.backgroundImage.width} height={main_data.backgroundImage.height}/>
                  </div>
                </div>
                <div>
                    <h2>{main_data.title}</h2>
                    <p>
                        {main_data.synopsis}
                    </p>
                </div>
            </div>
            </section>
        </>
    );
};

export default page;