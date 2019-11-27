/**
 * @name Home
 * @author darcrand
 * @desc
 */

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Button } from '@/components'
import styles from './styles.module.less'

// 注入多个store模块
@inject('counter', 'post')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.post.getPosts()
  }

  render() {
    const { count, add, addSync, myTostring } = this.props.counter
    const { list } = this.props.post
    return (
      <div className={styles.container}>
        <p>count: {count}</p>
        <Button block onClick={() => this.props.counter.start(100)}>
          重置
        </Button>
        <Button theme="dark" onClick={addSync}>
          addSync
        </Button>

        <p>posts: {list.length}</p>
        <p>{myTostring}</p>
      </div>
    )
  }
}

export default Home
