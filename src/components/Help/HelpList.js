import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Help from "./Help"

export default class HelpList extends Component {
  state = {
    helps: [],
    sortedHelps: [],
  }

  componentDidMount() {
    this.setState({
      helps: this.props.helps.edges,
      sortedHelps: this.props.helps.edges,
    })
  }

  render() {
    return (
      <section className={styles.helpTours}>
        <div className={styles.helpCenter}>
          {this.state.sortedHelps.map(({ node }) => {
            return <Help key={node.contentful_id} help={node} />
          })}
        </div>
      </section>
    )
  }
}
