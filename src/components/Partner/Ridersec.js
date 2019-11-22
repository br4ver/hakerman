import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import Riderimg1 from "../../images/hiwd1.png"
import Riderimg2 from "../../images/hiwd2.png"
import Riderimg3 from "../../images/hiwd3.png"
import Riderimg4 from "../../images/hiwd4.png"

class RiderSec extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyload: true,
      speed: 500,
      autoplay: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <section className="riderservice" id="rider-howitwork">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <div className="container">
              <div className="card2">
                <div className="cardimage-container2">
                  <img
                    loading="lazy"
                    className="cardimage2"
                    src={Riderimg1}
                    alt="Step 1"
                  />
                </div>
                <div className="cardcontent2">
                  <h5>Step 1</h5>
                  <h2 className="cardtitle">Log In</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="card2">
                <div className="cardimage-container2">
                  <img
                    loading="lazy"
                    className="cardimage2"
                    src={Riderimg2}
                    alt="Step 2"
                  />
                </div>
                <div className="cardcontent2">
                  <h5>Step 2</h5>
                  <h2 className="cardtitle">Be available</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="card2">
                <div className="cardimage-container2">
                  <img
                    loading="lazy"
                    className="cardimage2"
                    src={Riderimg3}
                    alt="Step 3"
                  />
                </div>
                <div className="cardcontent2">
                  <h5>Step 3</h5>
                  <h2 className="cardtitle">Accept order</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="card2">
                <div className="cardimage-container2">
                  <img
                    loading="lazy"
                    className="cardimage2"
                    src={Riderimg4}
                    alt="Step 4"
                  />
                </div>
                <div className="cardcontent2">
                  <h5>Step 4</h5>
                  <h2 className="cardtitle">End transaction</h2>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    )
  }
}

export default RiderSec
