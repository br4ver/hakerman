import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const HelpContact = () => {
    return (
      <section className={styles.contact}>
        <Title title="Have" subtitle="Questions?" />
        <div className={styles.helpcenter}>
          <form action="https://formspree.io/norbzqwerty@gmail.com" method="POST" className={styles.form} >
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
              <label>Question</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className={styles.formControl}
                placeholder="How can i..."
              />
            </div>
            <div>
 
              <input
                type="submit"
                value="Submit here"
                className={styles.btnPrimary}
              />

            </div>
          </form>
        </div>
      </section>
    )
}

export default HelpContact
