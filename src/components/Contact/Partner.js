import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Partner = () => {
  return (
    <section className={styles.contact}>
      <Title title="Sign" subtitle="Up" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/norbzqwerty@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Juan Dela Cruz"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="JuanDelaCruz@Email.com"
            />
          </div>
          <div>
            <label for="Rider">Rider Info</label>
            <input
              type="text"
              name="Rider"
              id="Rider"
              className={styles.formControl}
              placeholder="Ghost Rider"
            />
          </div>
          <div>
            <label for="Riderinfo">Rider Info</label>
            <input
              type="text"
              name="Riderinfo"
              id="Riderinfo"
              className={styles.formControl}
              placeholder="Ghost Rider"
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

export default Partner
