import React from "react"
import styles from "../../css/contact.module.css"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
const HelpContact = () => {
  return (
    <section className={styles.contact2}>
      <div className={styles.helpcenter}>
        <h4>Have Questions?</h4>
        <ArenguForm id="157432225128445589" />
      </div>
    </section>
  )
}

export default HelpContact
