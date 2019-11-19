import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import {Link} from 'gatsby'
import Riderimg1 from '../../images/help1.png'
import Riderimg2 from "../../images/help2.png"
import Riderimg3 from "../../images/help3.png"
import Riderimg4 from "../../images/help4.png"

class RiderSec extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyload:true,
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
              <div className="card">
                <div className="cardimage-container">
                  <img
                    loading="lazy"
                    className="cardimage"
                    src={Riderimg1}
                    alt="Step 1"
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 1</h4>
                  <h2 className="cardtitle">Fill up the form</h2>
                  <button type="Button" className="btn-merchant">
                    <Link
                      aria-label="link-rider-registration"
                      to="/rider/#rider-registration"
                      className="txbtn"
                      id="link-rform"
                    >
                      Sign Up
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="card">
                <div className="cardimage-container">
                  <img
                    loading="lazy"
                    className="cardimage"
                    src={Riderimg2}
                    alt="Step 2"
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 2</h4>
                  <h2 className="cardtitle">Click Submit</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="card">
                <div className="cardimage-container">
                  <img
                    loading="lazy"
                    className="cardimage"
                    src={Riderimg3}
                    alt="Step 3"
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 3</h4>
                  <h2 className="cardtitle">Prepare the listed requirements</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="card">
                <div className="cardimage-container">
                  <img
                    loading="lazy"
                    className="cardimage"
                    src={Riderimg4}
                    alt="Step 4"
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 4</h4>
                  <h2 className="cardtitle">
                    Wait for the representative to contact you
                  </h2>
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
