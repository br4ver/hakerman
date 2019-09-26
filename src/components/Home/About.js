import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpg'

const About = () => {
    return (
      <section className={styles.about}>
        <Title title="Download" subtitle="Now" />
        <div className={styles.aboutCenter}>
          <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
              <img src={img} alt="download" />
            </div>
          </article>
          <article className={styles.aboutInfo}>
            <h1>More Money</h1>
            <p>
              Art party activated charcoal hot chicken, portland yr meggings
              street art gentrify. Chillwave mixtape distillery, blue bottle selfies
              hexagon tbh. Ramps tattooed pabst godard, plaid marfa kale chips
              jean shorts twee activated charcoal 3 wolf moon butcher
              post-ironic asymmetrical food truck. 
            </p>
            <button type="button" className="btn-primary">
                Download
            </button>
          </article>
        </div>
      </section>
    )
}

export default About
