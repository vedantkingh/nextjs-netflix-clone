import MovieCard from '@/app/components/MovieCard';
import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '09be91c3f2msh8c3e952167af8f3p1d4f36jsn360e80be6558',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
      <>
        <section className={styles.movieSection}>
          <div className={styles.container}>
            <h1>Series and Movies</h1>
            {
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem}/>
              })
            }
          </div>
        </section>
      </>
  );
};

export default Movie;