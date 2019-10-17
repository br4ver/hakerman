import React from "react"
import "aos/dist/aos.css"

class Aosinit extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined

    this.aos = AOS
    this.aos.init()
  }
  render() {
    return <div></div>
  }
}

export default Aosinit
