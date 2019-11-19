import React from 'react'
import Loadable from 'react-loadable'
import styles from './styles.module.scss'

function Loading() {
  return <p className={styles.container}>加载中...</p>
}

/**
 * @description 懒加载组件(比 React.lazy 好用)
 * @param {Function} importFn 异步加载函数
 * @example const MyComp = Lazy(()=>import("./MyComp.jsx"))
 */
export default function Lazy(importFn) {
  return Loadable({
    loader: importFn,
    loading: Loading,
  })
}
