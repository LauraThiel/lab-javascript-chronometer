class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0

  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime +=1
      callback()
      console.log(this.currentTime)
    }, 1000) //don't know how to resolve the 2 last errors
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime%60)
    return seconds
  }
  twoDigitsNumber(number) {
    if (number < 9) {
      return "0" + (number)
    } else if (number > 9) {
      return number.toFixed(2)
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
  let min = this.twoDigitsNumber(this.getMinutes())
  let seconds = this.twoDigitsNumber(this.getSeconds())
  return `${0}${min}:${0}${sec}`
  }
}
