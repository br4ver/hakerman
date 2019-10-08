import React from "react"
import "../../css/rider.sec.css"
import "aos/dist/aos.css"
class RiderSec extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined

    this.aos = AOS
    this.aos.init()
  }

  render() {
    return (
      <section className="contain">
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
              <h1 className="cardtitle">Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                dolor praesentium at quod autem omnis, amet eaque unde
                perspiciatis adipisci possimus quam facere illo et quisquam quia
                earum nesciunt porro.
              </p>
            </div>
          </div>
        </div>
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
              <h1 className="cardtitle">Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                dolor praesentium at quod autem omnis, amet eaque unde
                perspiciatis adipisci possimus quam facere illo et quisquam quia
                earum nesciunt porro.
              </p>
            </div>
          </div>
        </div>
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
              <h1 className="cardtitle">Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                dolor praesentium at quod autem omnis, amet eaque unde
                perspiciatis adipisci possimus quam facere illo et quisquam quia
                earum nesciunt porro.
              </p>
            </div>
          </div>
        </div>
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
              <h1 className="cardtitle">Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                dolor praesentium at quod autem omnis, amet eaque unde
                perspiciatis adipisci possimus quam facere illo et quisquam quia
                earum nesciunt porro.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RiderSec
