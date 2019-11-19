/**
 * @name Home
 * @author darcrand
 * @desc
 */

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styles from './styles.module.scss'

@inject('counter')
@observer
class Home extends Component {
  render() {
    const { count, add, addSync } = this.props.counter
    return (
      <div className={styles.container}>
        <p>count: {count}</p>
        <button onClick={add}>add</button>
        <button onClick={addSync}>addSync</button>
      </div>
    )
  }
}

export default Home
