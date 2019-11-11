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
