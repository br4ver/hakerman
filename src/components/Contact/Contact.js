import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
      <section className={styles.contact}>
        <Title title="contact" subtitle="us" />
        <div className={styles.center}>
          <form action="https://formspree.io/norbzqwerty@gmail.com" method="POST" className={styles.form} >
            <div>
              <label >Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.formControl}
                placeholder="JuanDelaCruz@Email.com"
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className={styles.formControl}
                placeholder="Hello there"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Submit here"
                className={styles.submit}
              />
            </div>
          </form>
        </div>
      </section>
    )
}

export default Contact
