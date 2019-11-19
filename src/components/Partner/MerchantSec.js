import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import {Link} from 'gatsby'
import Riderimg from '../../images/goferphone21.png'

const MerchantSec = () => {
    const settings = {
      dots: true,
      infinite: true,
      lazyload: true,
      speed: 500,
      autoplaySpeed: 6000,
      autoplay: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <section className="riderservice" id="merchant-sec">
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="card">
                <div className="cardimage-container">
                  <img
                    loading="lazy"
                    className="cardimage"
                    src={Riderimg}
                    alt=""
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 1</h4>
                  <h1 className="cardtitle">Fill up the form</h1>
                  <button type="button" className="btn-merchant">
                    <Link
                      aria-label="link-merchant-registration"
                      to="/merchant/#merchant-registration"
                      className="txbtn"
                      id="link-mform"
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
                    src={Riderimg}
                    alt=""
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 2</h4>
                  <h1 className="cardtitle">
                    Wait for the representative to reach you.
                  </h1>
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
                    src={Riderimg}
                    alt=""
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 3</h4>
                  <h1 className="cardtitle">Get listed on our platform</h1>
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
                    src={Riderimg}
                    alt=""
                  />
                </div>
                <div className="cardcontent">
                  <h4>Step 4</h4>
                  <h2 className="cardtitle">Reach more customers</h2>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    )
  }
export default MerchantSec
