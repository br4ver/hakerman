import React, { Component } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../css/rider.sec.css"
import styled from "../../css/info.module.css"
import Phone1 from "../../images/HIW1.png"
import Phone2 from "../../images/HIW2.png"
import Phone3 from "../../images/HIW3.png"
import Phone4 from "../../images/HIW4.png"
export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    return (
      <div className={styled.scHolder} id="home-howitwork">
        <div
          className="hiw-bgcolor"
          data-aos="slide-right"
          data-aos-offset="100"
          data-aos-duration="1100"
          data-aos-once="true"
        ></div>
        <h4
          className="hiw-text"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-delay="400"
          data-aos-once="true"
        >
          How it works?
        </h4>
        <div className="slider-holder">
          <div
            className="slider-box"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="800"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-once="true"
          >
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              arrows={false}
              lazyLoad={true}
              dots={false}
              fade={true}
              responsive={[
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    arrows: true,
                  },
                },
              ]}
            >
              <div>
                <h3>
                  <img loading="lazy" src={Phone1} alt="gofer logo" />
                </h3>
              </div>
              <div>
                <h3>
                  <img loading="lazy" src={Phone2} alt="gofer logo" />
                </h3>
              </div>
              <div>
                <h3>
                  <img loading="lazy" src={Phone3} alt="gofer logo" />
                </h3>
              </div>
              <div>
                <h3>
                  <img loading="lazy" src={Phone4} alt="gofer logo" />
                </h3>
              </div>
            </Slider>
          </div>
          <div
            className="slider-box2"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="1100"
            data-aos-once="true"
          >
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              arrows={false}
              swipe={false}
              adaptiveHeight={true}
              initialSlide={0}
              responsive={[
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    fade: true,
                  },
                },
              ]}
            >
              <div className="info-step1 card-1">
                <h5>Step 1</h5>
                <h3>Download the app</h3>
                <p>
                  Get the app on {" "}
                  <button
                    onClick={() => scrollTo("#home-download")}
                    className={styled.gPlay}
                  >
                    Google Play Store
                  </button>
                </p>
              </div>
              <div className="info-step1 card-2">
                <h5>Step 2</h5>
                <h3>Search your restaurant</h3>
                <p>Discover various restaurants in the city.</p>
              </div>
              <div className="info-step1 card-3">
                <h5>Step 3</h5>
                <h3>Track your order</h3>
                <p>Never lose track of your order again with real-time tracking.</p>
              </div>
              <div className="info-step1">
                <h5>Step 4</h5>
                <h3>Enjoy your meal</h3>
                <p>Dig-in and enjoy.</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}
