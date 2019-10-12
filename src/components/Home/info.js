import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import styled from '../../css/info.module.css'
import Phone1 from "../../images/step1.webp"
import Phone2 from "../../images/step2.webp"
import Phone3 from "../../images/step3.webp"
import Phone4 from "../../images/step4.webp"

class Info extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: true,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    }
    return (
      <section>
        <div className={styled.leftDownload}>
          <article>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              <div>
                <img src={Phone1} alt="gofer logo" className={styled.home1} />
              </div>
              <div>
                <img src={Phone2} alt="gofer logo" className={styled.home1} />
              </div>
              <div>
                <img src={Phone3} alt="gofer logo" className={styled.home1} />
              </div>
              <div>
                <img src={Phone4} alt="gofer logo" className={styled.home1} />
              </div>
            </Slider>
          </article>
        </div>
      </section>
    )
  }
}


export default Info
