import React from "react"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import "../../css/slider-animation.css"
import "../../css/styles.css"


const content = [
  {
    title: "Step 1",
    description: "Download the App",
    button: "Read <br/> More",
    image: "../../1.jpg",
  },
  {
    title: "Step 2",
    description: "Complete your profile",
    button: "Discover",
    image: "../../2.jpg",
  },
  {
    title: "Step 3",
    description: "Select and add to cart.",
    button: "Buy now",
    image: "../../3.jpg",
  },
  {
    title: "Step 4",
    description: "Confirm and enjoy meal.",
    button: "Buy now",
    image: "../../4.jpg",
  },
]

const Infos = () => (
    <Slider className="slider-wrapper" infinite="true" autoplay={3000}>
      {content.map((item, index) => (
        <div
        id="home-howitwork"
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.image}') no-repeat center center`,
          }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>
        </div>
      ))}
    </Slider>
)

export default Infos
