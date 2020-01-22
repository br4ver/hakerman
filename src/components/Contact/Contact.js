import React from "react"
import styles from "../../css/contact.module.css"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
const Contact = () => {
  return (
    <div className="contact">
      <div className={styles.contactTitle1}>      
      <h2>Contact Us</h2>
      <p>
        Hey! Got some comments and suggestions? We’d love to hear your feedback.
      </p>
      </div>


      <div className="center">
        <div className={styles.forms}>
          <ArenguForm id="157354709110554754" />
        </div>
      </div>
    </div>
  )
}

export default Contact
