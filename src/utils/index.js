/**
 * @name boundary
 * @desc 数值边界
 * @param {Number} num 需要处理的数值
 * @param {Number} min 最小边界值
 * @param {Number} max 最大边界值
 */
export function boundary(num = 0, min = 0, max = 0) {
  return num < min ? min : num > max ? max : num
}

/**
 * @desc 获取url中的search参数,并转化为对象
 * @return {Object} search
 */
export function getSearchObject() {
  let result = {}
  const url = window.location.href
  const hasSearch = url.split('?').length > 1
  if (hasSearch) {
    const searchStr = url.split('?')[1]
    const searchKeyValueArr = searchStr.split('&')
    for (let i = 0; i < searchKeyValueArr.length; i++) {
      const [key, value] = searchKeyValueArr[i].split('=')
      result[key] = decodeURIComponent(value)
    }
  }

  return result
}

/**
 * @desc 将对象转化为search字符串
 * @param {String} window.location.search
 */
export function objectToSearch(obj = {}) {
  let searchStr = ''
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = encodeURIComponent(obj[key])
      searchStr += `${key}=${value}&`
    }
  }

  return searchStr ? '?' + searchStr.slice(0, -1) : ''
}

/**
 * @name randomStr
 * @desc 随机字符串
 * @param {Number} len - 字符串长度
 */
export function randomStr(len = 16) {
  const string =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const l = string.length
  let str = ''
  for (let i = 0; i < len; i++) {
    const index = Math.floor((Math.random() * 100 * l) % l)
    str += string[index]
  }
  return str
}
