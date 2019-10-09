import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const MerchantReg = () => {
  return (
    <section id="merchant-registration" className={styles.contact}>
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
              name="merchant-name"
              id="name"
              className={styles.formControl}
              placeholder="Juan Dela Cruz"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="merchant-email"
              id="email"
              className={styles.formControl}
              placeholder="JuanDelaCruz@Email.com"
            />
          </div>
          <div>
            <label>Partner Info</label>
            <input
              type="text"
              name="Rider"
              className={styles.formControl}
              placeholder="Ghost Rider"
            />
          </div>
          <div>
            <label >Partner Info</label>
            <input
              type="text"
              name="Riderinfo"
              className={styles.formControl}
              placeholder="Ghost Rider"
            />
          </div>
          <div>
            <input
              id="merchant-reg-btn"
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

export default MerchantReg
