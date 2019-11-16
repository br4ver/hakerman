import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import styles from "../css/aboutus.module.css"
import YouTube from "react-youtube"

class about extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo()
  }

  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        loop: 1,
        volume: 1,
        muted: 1,
      },
    }

    return (
      <Layout>
        <SEO title="About" />
        <div className={styles.videoBackground}>
          <div className={styles.videoForeground}>
            <YouTube
              videoId="JCjIrEQCzWM"
              opts={videoOptions}
              className={styles.videoIframe}
              onReady={this._onReady}
              onEnd={this._onEnd}
              muted
            />
          </div>
        </div>
      </Layout>
    )
  }
}


export default about
