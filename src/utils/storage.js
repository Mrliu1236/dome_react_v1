/**
 * @desc localStorage 加密存储(ie8+)
 * @author darcrand
 * @version 2019-09-17
 */

import store from 'store'
import { encrypt, decrypt } from './crypto-aes'

const storage = {
  /**
   * @desc 添加数据
   * @param {String} key 字段名称
   * @param {any} value 字段的值(通常为Object)
   */
  set: (key, value) => {
    if (!key || typeof key !== 'string') {
      console.error(
        "storage error: 'key' is required, and type should be 'string'"
      )
      return
    }

    if (!value) {
      console.error("storage error: 'value' is required, and type is 'any'")
      return
    }

    const encryptedValue = encrypt(value)
    store.set(key, encryptedValue)
  },

  /**
   * @desc 获取数据
   * @param {String} key 字段名称
   */
  get: key => {
    if (!key || typeof key !== 'string') {
      console.error(
        "storage error: 'key' is required, and type should be 'string'"
      )
      return
    }

    const encryptedValue = store.get(key)
    if (encryptedValue) {
      return decrypt(encryptedValue)
    }
    return null
  },

  /**
   * @desc 删除某个数据
   * @param {String} key 字段名称
   */
  remove: key => {
    if (!key || typeof key !== 'string') {
      console.error(
        "storage error: 'key' is required, and type should be 'string'"
      )
      return
    }

    store.remove(key)
  },

  /**
   * @desc 清空所有数据(尽量不要使用)
   */
  clear: () => {
    store.clearAll()
  },
}

export default storage
