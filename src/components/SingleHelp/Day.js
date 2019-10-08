import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/day.module.css"
const Day = ({ question, answer }) => {
  const [showAnswer, setAnswer] = useState(false)
  const toggleAnswer = () => {
    setAnswer(showAnswer => !showAnswer)
  }
  return (
    <article className={styles.day}>
      <div className={styles.innerday}>
        <h4>
        {question}
        <button className={styles.btn} onClick={toggleAnswer}>
          <FaAngleDown />
        </button>
      </h4>
      </div>

      {showAnswer && <p>{answer}</p>}
    </article>
  )
}

export default Day
