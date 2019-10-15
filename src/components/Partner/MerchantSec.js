import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import {Link} from 'gatsby'
export default class MerchantSec extends Component {
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
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="riderservice">
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="card">
                <div className="cardimage-container">
                  <img
                    className="cardimage"
                    src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
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
                    className="cardimage"
                    src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
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
                    className="cardimage"
                    src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
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
                    className="cardimage"
                    src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
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
}
