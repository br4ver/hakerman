import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Post from "./Post"
import Title from "../Title"

export default class PostList extends Component {
  state = {
    posts: [],
    sortedPosts: [],
  }

  componentDidMount() {
    this.setState({
      posts: this.props.posts.edges,
      sortedPosts: this.props.posts.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="Lalagyan Ng" subtitle="Articles" />
        <div className={styles.center}>
          {this.state.sortedPosts.map(({ node }) => {
            return <Post key={node.contentful_id} post={node} />
          })}
        </div>
      </section>
    )
  }
}
