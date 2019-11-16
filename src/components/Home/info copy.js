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
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import styled from "../../css/info.module.css"
import Phone1 from "../../images/step1.webp"
import Phone2 from "../../images/step2.webp"
import Phone3 from "../../images/step3.webp"
import Phone4 from "../../images/step4.webp"
class Info extends React.Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      speed: 500,
      autoplay: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: true,
    }
    return (
      <section id="home-howitwork">
        <div
          className={styled.leftDownload}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <article>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              <div>
                <img
                  loading="lazy"
                  src={Phone1}
                  alt="gofer logo"
                  className={styled.home1}
                />
              </div>
              <div>
                <img
                  src={Phone2}
                  loading="lazy"
                  alt="gofer logo"
                  className={styled.home1}
                />
              </div>
              <div>
                <img
                  src={Phone3}
                  loading="lazy"
                  alt="gofer logo"
                  className={styled.home1}
                />
              </div>
              <div>
                <img
                  src={Phone4}
                  loading="lazy"
                  alt="gofer logo"
                  className={styled.home1}
                />
              </div>
            </Slider>
          </article>
        </div>
      </section>
    )
  }
}

export default Info
