import React from "react"
import styles from "../css/aboutus.module.css"
import bear from "../images/bear.mp4"
const Aboutus = () => {
  return (
    <div className={styles.videoBackground}>
      <div className={styles.aboutHero}></div>        
      <video
          autoPlay
          muted
          loop
          className={styles.aboutVideo}
        >
          <source src={bear} type="video/mp4" />
        </video>
    </div>
  )
}


export default Aboutus
