/**
 * @name Home
 * @author darcrand
 * @desc
 */

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styles from './styles.module.scss'

// 注入多个store模块
@inject('counter', 'post')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.post.getPosts()
  }

  render() {
    const { count, add, addSync } = this.props.counter
    const { list } = this.props.post
    return (
      <div className={styles.container}>
        <p>count: {count}</p>
        <button onClick={add}>add</button>
        <button onClick={addSync}>addSync</button>

        <p>posts: {list.length}</p>
      </div>
    )
  }
}

export default Home
