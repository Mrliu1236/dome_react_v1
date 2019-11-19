/**
 * @desc aes 加/解密工具
 * @author darcrand
 * @version 2019-09-17
 */

const CryptoJS = require('crypto-js')

const DEFAULT_KEY = 'project-key'
const DEFAULT_IV = 'abcdefghijklmnopqrstuvwxyz'

/**
 * @desc aes加密
 * @param {any} value 需要加密的数据
 * @return {String} 加密的字符串
 */
function encrypt(value = '', { key = DEFAULT_KEY, iv = DEFAULT_IV } = {}) {
  if (!value) {
    console.error("aes encrypt error: param:'value' is required")
    return ''
  }

  try {
    const str = JSON.stringify(value)
    const ciphertext = CryptoJS.AES.encrypt(str, key, { iv })
    const encrypted = ciphertext.toString()
    return encrypted
  } catch (err) {
    console.error('aes encrypt error: fail')
    return ''
  }
}

/**
 * @desc aes解密
 * @param {String} str 被加密的内容
 * @return {Stirng} 解密的明文
 */
function decrypt(str = '', { key = DEFAULT_KEY, iv = DEFAULT_IV } = {}) {
  if (!str) {
    console.error("aes decrypt error: param:'str' is required")
    return ''
  }

  try {
    var bytes = CryptoJS.AES.decrypt(str, key, { iv })
    var plaintext = bytes.toString(CryptoJS.enc.Utf8)
    const decrypted = JSON.parse(plaintext)
    return decrypted
  } catch (err) {
    console.error('aes encrypt error: fail')
    return ''
  }
}

export { encrypt, decrypt }
