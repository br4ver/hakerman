import React from "react"
import "../../css/isometric.css"
import Phone from "../../images/Phone.png"
import Phone2 from "../../images/Phone1.png"

const Isometric = () => {
  return (
    <div className="iso">
      <div className="box">
        <img src={Phone} alt="gofer logo" className="" />
        <img src={Phone2} alt="gofer logo" className="screen screen1" />
        <img src={Phone2} alt="gofer logo" className="screen screen2" />
        <img src={Phone2} alt="gofer logo" className="screen screen3" />
      </div>
    </div>
  )
}

export default Isometric
