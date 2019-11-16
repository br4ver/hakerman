import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'
import { ArenguForm } from "gatsby-plugin-arengu-forms"
const Contact = () => {
    return (
      <section className={styles.contact}>
        <Title title="contact" subtitle="us" />
        <div className={styles.center}>
          <div className={styles.forms}>
            <ArenguForm id="157354709110554754" />
          </div>
        </div>
      </section>
    )
}

export default Contact
