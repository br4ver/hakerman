import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const RiderReg = () => {
  return (
    <section id="rider-registration" className={styles.contact}>
      <Title title="Sign" subtitle="Up" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/norbzqwerty@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="rider-name"
              className={styles.formControl}
              placeholder="Juan Dela Cruz"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="rider-email"
              className={styles.formControl}
              placeholder="JuanDelaCruz@Email.com"
            />
          </div>
          <div>
            <label>Rider Info</label>
            <input
              type="text"
              name="Rider"
              className={styles.formControl}
              placeholder="Ghost Rider"
            />
          </div>
          <div>
            <label >Rider Info</label>
            <input
              type="text"
              name="Riderinfo"
              className={styles.formControl}
              placeholder="Ghost Rider"
            />
          </div>
          <div>
            <input
              id="rider-reg-btn"
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

export default RiderReg
