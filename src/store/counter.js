import { observable, action, runInAction, autorun, computed } from 'mobx'

class CounterStore {
  @observable count = 0
  @observable name = 'lp'

  constructor() {
    autorun(() => console.log('count', this.count))
  }

  @action
  start = value => {
    this.count = value
  }

  @action
  addSync = async () => {
    await delay()
    runInAction(() => {
      this.count++
    })
  }
  @computed get myTostring() {
    return this.name + ':' + this.count
  }
}

function delay(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default CounterStore
