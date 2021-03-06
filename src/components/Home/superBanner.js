import React from "react"
import PropTypes from "prop-types"

class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  _onMouseMove = e => {
    const width = this.refs.titleContainer.clientWidth
    const height = this.refs.titleContainer.clientHeight
    const oX = (e.nativeEvent.offsetX / width) * 100
    const oY = (e.nativeEvent.offsetY / height) * 100
    // console.log(Math.floor(oX), Math.floor(oY));
    this.setState({
      x: oX,
      y: oY,
    })
  }

  _onMouseOut = () => {
    this.setState({
      x: 0,
      y: 0,
    })
  }

  render() {
    const { text,text2 } = this.props
    const { x, y } = this.state
    const maskStyle = {
      "--maskX": x,
      "--maskY": y,
    }
    return (
      <div
        id="hero-title"
        className="titleContainer"
        onMouseMove={this._onMouseMove}
        onMouseOut={this._onMouseOut}
        ref="titleContainer"
        style={maskStyle}
      >
        <div className="titleWrapper">
          <h1>{text}</h1>
          <p>{text2}</p>
        </div>
        <div className="titleWrapper cloneWrapper">
          <h1>{text}</h1>
          <p>{text2}</p>
        </div>
      </div>
    )
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
